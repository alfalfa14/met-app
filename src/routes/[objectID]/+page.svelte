<script lang="ts">
	let { data } = $props();
</script>

<div class="content">
	<h1>{data.title}</h1>
	<p>Medium: {data.medium}</p>
	<p>Dimensions: {data.dimensions}</p>
	<p>Artist Name: {data.artistDisplayName}</p>
	<p>Artist Bio: {data.artistDisplayBio}</p>
	<p>Department: {data.department}</p>
	<p>Repository: {data.repository}</p>

	{#if data.isPublicDomain}
		<p>Public Domain
			<img src="https://licensebuttons.net/p/mark/1.0/88x31.png" alt="Public Domain" />
		</p>
	{/if}

	<img src={data.primaryImage} alt={data.title} width="400" />

	<br />
	<a href={data.objectURL}>View on The Met website</a>
</div>

<style>
	.content {
		padding: 40px;
	}
	h1 {
		font-size: 1.8rem;
		font-weight: bold;
		margin-bottom: 15px;
	}
	p {
		margin-bottom: 8px;
	}
	img {
		margin-top: 15px;
	}
</style>