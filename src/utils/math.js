// Inclusive min,max
export function randomIntInRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function lerp(a, b, t) {
	return a * (1 - t) + b * t;
}

export function mapRange(inMin, inMax, outMin, outMax, t) {
	return ((t - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

export function gammaInv(x) {
	return x >= 0.04045 ? Math.pow((x + 0.055) / (1 + 0.055), 2.4) : x / 12.92;
}

export function vec3(x, y, z) {
	return [x, y, z];
}

export function cross3(a, b) {
	return vec3(
		a[1] * b[2] - a[2] * b[1],
		a[2] * b[0] - a[0] * b[2],
		a[0] * b[1] - a[1] * b[0]
	);
}

export function dot3(a, b) {}

export function norm3(v) {
	const x = v[0];
	const y = v[1];
	const z = v[2];
	const oneOverLen = 1.0 / Math.sqrt(x * x + y * y + z * z);

	return vec3(x * oneOverLen, y * oneOverLen, z * oneOverLen);
}

export function sub3(a, b) {
	return vec3(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

export function mat4() {
	return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

export function mulMat4Mat4(a, b) {
	const a00 = a[0];
	const a01 = a[1];
	const a02 = a[2];
	const a03 = a[3];
	const a10 = a[4];
	const a11 = a[5];
	const a12 = a[6];
	const a13 = a[7];
	const a20 = a[8];
	const a21 = a[9];
	const a22 = a[10];
	const a23 = a[11];
	const a30 = a[12];
	const a31 = a[13];
	const a32 = a[14];
	const a33 = a[15];
	const b00 = b[0];
	const b01 = b[1];
	const b02 = b[2];
	const b03 = b[3];
	const b10 = b[4];
	const b11 = b[5];
	const b12 = b[6];
	const b13 = b[7];
	const b20 = b[8];
	const b21 = b[9];
	const b22 = b[10];
	const b23 = b[11];
	const b30 = b[12];
	const b31 = b[13];
	const b32 = b[14];
	const b33 = b[15];

	return [
		a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03,
		a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03,
		a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03,
		a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03,

		a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13,
		a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13,
		a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13,
		a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13,

		a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23,
		a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23,
		a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23,
		a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23,

		a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33,
		a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33,
		a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33,
		a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33,
	];
}

export function createModelMatrix(scale, rotate, translate) {
	const scaleMat = mat4();
	scaleMat[0] = scale[0];
	scaleMat[5] = scale[1];
	scaleMat[10] = scale[2];

	const rxMat = mat4();
	const sx = Math.sin(rotate[0]);
	const cx = Math.cos(rotate[0]);

	rxMat[5] = cx;
	rxMat[6] = sx;
	rxMat[9] = -sx;
	rxMat[10] = cx;

	const ryMat = mat4();
	const sy = Math.sin(rotate[1]);
	const cy = Math.cos(rotate[1]);

	ryMat[0] = cy;
	ryMat[2] = -sy;
	ryMat[8] = sy;
	ryMat[10] = cy;

	const rzMat = mat4();
	const sz = Math.sin(rotate[2]);
	const cz = Math.cos(rotate[2]);

	rzMat[0] = cz;
	rzMat[1] = sz;
	rzMat[4] = -sz;
	rzMat[5] = cz;

	const rotMat = mulMat4Mat4(rzMat, mulMat4Mat4(ryMat, rxMat));

	const translateMat = mat4();
	translateMat[12] = translate[0];
	translateMat[13] = translate[1];
	translateMat[14] = translate[2];

	const scaleRotMat = mulMat4Mat4(rotMat, scaleMat);
	const model = mulMat4Mat4(translateMat, scaleRotMat);

	return model;
}

export function createLookAtMatrix(pos, target, worldUp) {
	const dir = norm3(sub3(pos, target));
	const right = norm3(cross3(worldUp, dir));
	const up = cross3(dir, right);

	const m = [
		right[0],
		right[1],
		right[2],
		0,
		up[0],
		up[1],
		up[2],
		0,
		dir[0],
		dir[1],
		dir[2],
		0,
		pos[0],
		pos[1],
		pos[2],
		1,
	];

	return m;
}

export function createViewMatrix(pos, target, worldUp) {
	const l = createLookAtMatrix(pos, target, worldUp);
	const m = [
		l[0],
		l[4],
		l[8],
		0,
		l[1],
		l[5],
		l[9],
		0,
		l[2],
		l[6],
		l[10],
		0,
		-(pos[0] * l[0] + pos[1] * l[1] + pos[2] * l[2]),
		-(pos[0] * l[4] + pos[1] * l[5] + pos[2] * l[6]),
		-(pos[0] * l[8] + pos[1] * l[9] + pos[2] * l[10]),
		1,
	];

	return m;
}

export function createPerspectiveProjectionMatrix(aspect, vFov, near, far) {
	const d =
}
