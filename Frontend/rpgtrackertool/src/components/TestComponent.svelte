<script>
  let value = "";
</script>

<h2>Hello from Svelte!</h2>
<input type="text" bind:value={value}>
<p>^that says {value}</p>