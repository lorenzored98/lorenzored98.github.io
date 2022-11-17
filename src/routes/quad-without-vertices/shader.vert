#version 300 es

uniform float uTime;

out vec2 vUv;

// Only for the demo' sake
vec2 move(vec2 p, float t) {
	
	p *= min(max(0.2, abs(sin(t))), 0.5);
	
	float rt = t * 4.0;
	mat2 rot = mat2(cos(rt), -sin(rt), sin(rt), cos(rt));
	p *= rot;

	p.x += cos(t) * 0.5;
	p.y += sin(t) * 0.5;

	return p;
}

void main() {

	vec2 pos = vec2(
		2.0 * (float(gl_VertexID & 1) - 0.5), 
		-(float(gl_VertexID >> 1) - 0.5) * 2.0
	);

	pos = move(pos, uTime);

	gl_Position = vec4(pos, 0.0, 1.0);
	vUv = vec2(float(gl_VertexID & 1), 1.0 - float(gl_VertexID >> 1));
}