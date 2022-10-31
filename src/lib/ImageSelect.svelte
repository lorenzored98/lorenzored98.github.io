<script>
	export let id;
	export let value;
	export let onChange;
</script>

<label for={id}>Source</label>
<select {id} bind:value on:change={onChange}>
	<option default value={"/images/starrynight.webp"}>Starry Night</option>
	<option value={"/images/greatwave.webp"}>Great Wave</option>
	<option value={"/images/akira.webp"}>Akira</option>
	<option value={"/images/dragonquest.webp"}>Dragon Quest</option>
</select>
