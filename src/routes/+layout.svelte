<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<h1>The Met Inventory Pages</h1>
	<a href="/">Home</a>
	<a href="/wheat-field">Wheat Field with Cypresses</a>
	<a href="/washington">Washington Crossing the Delaware</a>
</nav>

{@render children()}

<style>
	nav {
		background-color: #c0392b;
		color: white;
		padding: 20px;
	}
	nav h1 {
		font-size: 1.8rem;
		font-weight: bold;
		margin-bottom: 10px;
	}
	nav a {
		color: white;
		font-weight: bold;
		margin-right: 20px;
		text-decoration: none;
	}
</style>
