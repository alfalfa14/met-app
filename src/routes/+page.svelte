<script lang="ts">
	let searchTerm: string = $state('');
	let objectIDs: number[] = $state([]);

	// AI assisted: consulted AI for syntax on using async/await with the Met search API, and for using optional chaining (?.) and nullish coalescing (??) operators
	async function search() {
		if (!searchTerm) return;
		const response = await fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`
		);
		const data = await response.json();
		objectIDs = data.objectIDs?.slice(0, 10) ?? [];
	}

	// AI assisted: consulted AI for syntax on using async/await to fetch individual object data by ID from the Met API
	async function getObjectData(id: number) {
		const response = await fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
		);
		return await response.json();
	}
</script>

<div class="content">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Metropolitan_Museum_of_Art_%28The_Met%29_-_NYC_-_USA.jpg/1200px-Metropolitan_Museum_of_Art_%28The_Met%29_-_NYC_-_USA.jpg" alt="The Met" style="width: 100%; max-width: 800px;" />

	<h2>Welcome to the Met Inventory Info Website</h2>
	<p>This website displays information on two artworks at the Metropolitan Museum of Art:</p>
	<p>1. Wheat Field with Cypresses by Vincent van Gogh</p>
	<p>2. Washington Crossing the Delaware by Emanuel Leutze</p>
	<p>You can learn about the artist, medium, dimensions, and location of the artworks. Enjoy the exploration!</p>

	<input bind:value={searchTerm} placeholder="Search for artworks by keyword (limit 10) ..." />
	<button onclick={search}>Search</button>

	<!-- AI assisted: consulted AI for syntax on using {#await} block to asynchronously fetch and display each search result as an anchor link -->
	{#if objectIDs.length === 0}
		<p>No results found. Try searching for "sunflower" or "monet".</p>
	{:else}
		{#each objectIDs as id}
			{#await getObjectData(id)}
				<p>Loading...</p>
			{:then obj}
				<p><a href="/{id}">{obj.title}</a></p>
			{:catch error}
				<p>Error loading item.</p>
			{/await}
		{/each}
	{/if}
</div>

<style>
	.content {
		padding: 40px;
	}
	h2 {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 10px;
	}
	input {
		padding: 8px;
		width: 300px;
		border: 1px solid #ccc;
	}
	button {
		padding: 8px 16px;
		background-color: #3b82f6;
		color: white;
		border: none;
		cursor: pointer;
		margin-left: 8px;
	}
	a {
		color: #1d4ed8;
	}
</style>