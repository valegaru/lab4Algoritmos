export const getRickMorty = async (value: number) => {
	try {
		const arrayRick = []; // estoy diciendo que rick e un arreglo
		for (let i = 1; i <= value; i++) {
			const rickandmorty = await fetch('https://rickandmortyapi.com/api/character/' + i).then((res) => res.json());
			arrayRick.push(rickandmorty);
			console.log(rickandmorty);
		}
		return arrayRick;
	} catch (error) {
		console.error(error);
	}
};
