// AI assisted: consulted AI for syntax on using fetch with dynamic route params
// in SvelteKit's load function, and for async/await usage with the Met API

export async function load({ fetch, params }) {
	const response = await fetch(
		`https://collectionapi.metmuseum.org/public/collection/v1/objects/${params.objectID}`
	);
	const data = await response.json();
	return data;
}