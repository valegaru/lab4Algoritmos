import { getRickMorty } from './data/dataFetch';
import './components/indexPadre';
import MyCharacter, { Attribute } from './components/Character/Character';

class AppContainer extends HTMLElement {
	characters: MyCharacter[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		for (let i = 1; i <= 15; i++) {
			//hasta tal personaje
			const characterData = await getRickMorty(i);
			const firstEpisodeName = await this.getFirstEpisodeName(characterData.episode[0]); // Obtener el nombre del primer episodio
			this.render({ ...characterData, nameoffirstepisode: firstEpisodeName });
		}
	}

	//usa lo que ya sacamos con getRickMorty
	async getFirstEpisodeName(episodeUrl: string): Promise<string> {
		try {
			const episodeData = await fetch(episodeUrl).then((res) => res.json());
			return episodeData.name;
		} catch (error) {
			console.error('Error fetching episode data:', error);
			return 'Unknown';
		}
	}

	render(characterData: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `<my-character
                image='${characterData.image || 'not declared'}'
                name='${characterData.name || 'not declared'}'
                status='${characterData.status || 'not declared'}'
                species='${characterData.species || 'not declared'}'
                type='${characterData.type || 'not declared'}'
                origin='${characterData.origin.name || 'not declared'}'
                nameoffirstepisode='${characterData.nameoffirstepisode || 'not declared'}'></my-character>`;
		}
	}
}

customElements.define('app-container', AppContainer);
