export function timestampToDate(timestamp) {
	const d = new Date(timestamp * 1000);

	const date = Intl.DateTimeFormat("en-GB").format(d);

	// YYYY-MM-DD https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
	// Surprised to not see date.toDateString() as a valid option
	const datetime = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

	return { date, datetime };
}
