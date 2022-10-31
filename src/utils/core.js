export function debounce(cb, t) {
	let id = null;
	return () => {
		window.clearTimeout(id);
		id = window.setTimeout(() => {
			cb();
		}, t);
	};
}
