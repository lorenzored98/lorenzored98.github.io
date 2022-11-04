export function createShader(gl, type, source) {
	const shader = gl.createShader(type);

	if (!shader) {
		throw new Error("Could not create shader");
	}

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

	if (success) {
		return shader;
	}

	const error = gl.getShaderInfoLog(shader);
	gl.deleteShader(shader);
	throw new Error(error || "Could not compile shader");
}

export function createProgram(gl, { vert, frag }) {
	const program = gl.createProgram();
	if (!program) {
		throw new Error("Could not create program");
	}

	gl.attachShader(program, vert);
	gl.attachShader(program, frag);
	gl.linkProgram(program);
	const success = gl.getProgramParameter(program, gl.LINK_STATUS);

	if (success) {
		gl.deleteShader(vert);
		gl.deleteShader(frag);
		return program;
	}

	const error = gl.getProgramInfoLog(program);
	gl.deleteProgram(program);
	throw new Error(error || "Could not link program");
}

let _tID = 1;
export function createTexture(
	gl,
	{
		src,
		mipmaps = null,
		internalFormat = "rgba",
		target = "rgba",
		wrapS = "REPEAT",
		wrapT = "REPEAT",
		minFilter = "NEAREST",
		magFilter = "NEAREST",
		flipY = false,
	}
) {
	const id = _tID;
	_tID++;
	const texture = gl.createTexture();

	if (!texture) {
		throw new Error("Couldn't create texture");
	}

	const _target = target === "rgb" ? gl.RGB : gl.RGBA;
	const _internalFormat = internalFormat === "rgb" ? gl.RGB : gl.RGBA;

	const _wrapS = gl[wrapS];
	const _wrapT = gl[wrapT];
	let _minFilter = gl[minFilter];
	const _magFilter = gl[magFilter];

	if (mipmaps) {
		_minFilter = gl[mipmaps];
	}

	if (typeof src === "string") {
		const image = new Image();
		image.crossOrigin = "anonymous";
		image.src = src;
		image.onload = () =>
			genImage(
				gl,
				texture,
				id,
				image,
				_target,
				_internalFormat,
				_wrapS,
				_wrapT,
				_minFilter,
				_magFilter,
				mipmaps,
				flipY
			);
	} else if (src instanceof Image) {
		genImage(
			gl,
			texture,
			id,
			src,
			_target,
			_internalFormat,
			_wrapS,
			_wrapT,
			_minFilter,
			_magFilter,
			mipmaps,
			flipY
		);
	}

	return { id, value: texture };
}

function genImage(
	gl,
	texture,
	id,
	image,
	target,
	internalFormat,
	wrapS,
	wrapT,
	minFilter,
	magFilter,
	mipmaps,
	flipY
) {
	useTexture(gl, texture, id);

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);

	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);

	gl.texImage2D(
		gl.TEXTURE_2D,
		0,
		internalFormat,
		image.width,
		image.height,
		0,
		target,
		gl.UNSIGNED_BYTE,
		image
	);

	if (mipmaps) {
		gl.generateMipmap(gl.TEXTURE_2D);
	}
}

export function useTexture(gl, texture, id) {
	gl.activeTexture(gl.TEXTURE0 + id);
	gl.bindTexture(gl.TEXTURE_2D, texture);
}
