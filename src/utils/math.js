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
