export const getRickMorty = async (value: number) => {
	try {
		const rickandmorty = await fetch('https://rickandmortyapi.com/api/character/' + value).then((res) => res.json());
		return rickandmorty;
	} catch (error) {
		console.error(error);
	}
};

export default getRickMorty;
