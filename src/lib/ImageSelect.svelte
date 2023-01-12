<script>
	export let id;
	export let value;
	export let onChange;
</script>

<label for={id}>Source</label>
<select {id} bind:value on:change={onChange}>
	<option default value={"/images/ukiyo-e.webp"}>Ukiyo-e</option>
	<option value={"/images/arcane.webp"}>Arcane</option>
	<option value={"/images/akira.webp"}>Akira</option>
	<option value={"/images/jargon.webp"}>Jargon</option>
</select>
