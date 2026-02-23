// AI assisted: consulted AI for syntax on using fetch with dynamic route params
// in SvelteKit's load function, and for async/await usage with the Met API

export async function load({ fetch }) {
	const response = await fetch(
		'https://collectionapi.metmuseum.org/public/collection/v1/objects/11417'
	);
	const data = await response.json();
	return data;
}