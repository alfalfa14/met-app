export async function load({ fetch, params }) {
	const response = await fetch(
		`https://collectionapi.metmuseum.org/public/collection/v1/objects/${params.objectID}`
	);
	const data = await response.json();
	return data;
}