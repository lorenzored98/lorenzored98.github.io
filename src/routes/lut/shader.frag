#version 300 es

precision highp float;

uniform vec2 uRes;
uniform sampler2D uTex;
uniform sampler2D uLUT;
uniform float uLUTSize;
uniform float uStrength;

out vec4 outColor;

void main() {
	vec2 uv = gl_FragCoord.xy / uRes;
	vec4 tex = texture(uTex, uv);

	tex.r = clamp(0.0, 1.0, tex.r);
	tex.g = clamp(0.0, 1.0, tex.g);
	tex.b = clamp(0.0, 1.0, tex.b);
	
	vec4 lut = texture(uLUT, uv);

	float maxSize = uLUTSize - 1.0;
	float maxCellCoord = 1.0 - (1.0 / uLUTSize);
	vec2 halfTexel = 0.5 / vec2(uLUTSize * uLUTSize, uLUTSize);

	float redOffset = halfTexel.x + tex.r * (maxCellCoord / uLUTSize);
	float greenOffset = halfTexel.y + tex.g * maxCellCoord;

	float blue = tex.b * maxSize;

	float leftCell = floor(blue);
	float rightCell = ceil(blue);

	vec2 left = vec2(
		leftCell / uLUTSize + redOffset,
		greenOffset
	);

	vec2 right = vec2(
		rightCell / uLUTSize + redOffset,
		greenOffset
	);

	vec3 color = mix(
		texture(uLUT, left).rgb,
		texture(uLUT, right).rgb,
		fract(blue)
	);

	color = mix(tex.rgb, color, uStrength);	

	outColor = vec4(color, tex.a);
}