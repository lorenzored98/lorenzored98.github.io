#version 300 es

precision highp float;

in vec2 vUv;

uniform float uTime;
uniform sampler2D uGrad;

uniform int uPattern;
uniform float uPatternSize;
uniform float uPatternGrid;
uniform float uRepeat;

out vec4 outColor;

// https://thebookofshaders.com/13/
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define OCTAVES 8
float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

// https://iquilezles.org/articles/warp/
float domainWarp(vec2 p) {
	vec2 q = vec2( fbm( p + vec2(0.0,0.0) ),
                   fbm( p + vec2(5.2,1.3) ) );

    vec2 r = vec2( fbm( p + 4.0*q + vec2(1.7,9.2) ),
                   fbm( p + 4.0*q + vec2(8.3,2.8) ) );

    return fbm( p + 4.0*r );
}

vec2 gridUv(vec2 uv, float t) {
	return floor(uv * t) / t;
}

float remap(float v, vec2 inMinMax, vec2 outMinMax) {
	return 
		outMinMax.x + (v - inMinMax.x) * 
		(outMinMax.y - outMinMax.x) / (inMinMax.y - inMinMax.x);
}

float circle(vec2 uv, float s) {
	float d = length(2.0 * uv - 1.0);
	return step(d, s);
}

float box (vec2 uv, float s, float r){
	vec2 d = abs(2.0 * uv - 1.0) - s;
    float sdf = length(max(d,0.0)) + min(max(d.x,d.y),0.0);

	return step(r, 1.0 - sdf);
}

void main() {
	vec2 dwUv = vUv;
	dwUv = gridUv(dwUv, uRepeat);
	dwUv /= gridUv(dwUv + vec2(1.0, -3.0), uRepeat / 1.3);

	float scrollX = fbm(vUv * 3.0 - uTime);
	float scrollY = fbm(vec2(vUv.y, vUv.x) * 3.0 + uTime);

	float warp = domainWarp(dwUv + vec2(scrollX, scrollY));
	
	warp = remap(warp, vec2(0.10, 0.75), vec2(0.0, 1.0));
	
	vec2 pUv = fract(vUv * uPatternGrid);

	float pattern;

	if(uPattern == 0) {
		pattern = box(pUv, uPatternSize * warp, 0.75);
	}else if(uPattern == 1) {
		pattern = circle(pUv, uPatternSize * warp);
	}

	vec3 gradient = texture(uGrad, vec2(warp)).rgb;

	outColor = vec4(vec3(pattern) * gradient, 1.0);
}