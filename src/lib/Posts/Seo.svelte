<script>
	export let title;
	export let description;
	export let keywords;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Pepe Lorenzo" />
</svelte:head>
