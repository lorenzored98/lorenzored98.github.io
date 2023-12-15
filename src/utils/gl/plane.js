// attrs is an array of {size: num, data: []}
export function planeGeometry(width, height, wSub = 1, hSub = 1, attrs = []) {
	let attrsSizes = 0;
	const attrCount = (wSub + 1) * (hSub + 1);
	for (let i = 0; i < attrs.length; i++) {
		const attr = attrs[i];
		const count = attr.data.length / attr.size;
		if (count !== attrCount) {
			throw new Error(
				`Attr at index ${i} count is ${count} vs expected ${attrCount}`
			);
		}

		attrsSizes += attr.size;
	}

	const stride = 8 + attrsSizes;
	const attributes = new Float32Array(attrCount * stride);

	const indices = new Int32Array(wSub * hSub * 6);

	const halfW = width / 2;
	const halfH = height / 2;
	const wStep = width / wSub;
	const hStep = height / hSub;

	let ai = 0;

	for (let y = 0; y <= hSub; y++) {
		for (let x = 0; x <= wSub; x++) {
			attributes[ai] = x * wStep - halfW;
			attributes[ai + 1] = y * hStep - halfH;
			attributes[ai + 3] = x / wSub;
			attributes[ai + 4] = y / hSub;
			attributes[ai + 7] = 1;
			ai += stride;
		}
	}

	let initOffset = 8;
	let offset = initOffset;

	for (let i = 0; i < attrs.length; i++) {
		const attr = attrs[i];

		let size = attr.size;
		for (let j = 0; j < attr.data.length; j++) {
			attributes[offset] = attr.data[j];
			size--;
			offset++;

			if (size == 0) {
				offset += stride - attr.size;
				size = attr.size;
			}
		}

		initOffset += attr.size;
		offset = initOffset;
	}

	let ii = 0;
	for (let y = 0; y < hSub; y++) {
		for (let x = 0; x < wSub; x++) {
			const bl = y * (wSub + 1) + x;
			const tl = bl + wSub + 1;
			indices[ii] = bl;
			indices[ii + 1] = bl + 1;
			indices[ii + 2] = tl + 1;
			indices[ii + 3] = bl;
			indices[ii + 4] = tl + 1;
			indices[ii + 5] = tl;

			ii += 6;
		}
	}

	return {
		attributes: new Float32Array(attributes),
		indices: new Int32Array(indices),
		stride,
	};
}
