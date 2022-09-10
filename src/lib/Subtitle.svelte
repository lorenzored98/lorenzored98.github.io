<script>
	export let id;
</script>

<h2>
	<a href="#{id}" {id}><slot /></a>
</h2>

<style>
	h2 {
		margin-bottom: 2rem;
	}
</style>
