// indexAbuelo.ts
import { getRickMorty } from './data/dataFetch';
import './components/indexPadre';
import MyCharacter, { Attribute } from './components/Character/Character';

class AppContainer extends HTMLElement {
	characters: MyCharacter[] = [];
	characterCountInput: HTMLInputElement | null = null;
	charactersContainer: HTMLDivElement | null = null; // Agregamos una referencia al contenedor de personajes

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
                <label for="characterCount">Number of Characters to Show:</label>
                <input type="number" id="characterCount" name="characterCount" min="1" placeholder="Enter number of characters">
                <button id="showCharactersButton">Show Characters</button>
                <div id="charactersContainer"></div>
            `;

			this.characterCountInput = this.shadowRoot.querySelector('#characterCount');
			const showCharactersButton = this.shadowRoot.querySelector('#showCharactersButton');
			this.charactersContainer = this.shadowRoot.querySelector('#charactersContainer'); // Asignamos la referencia al contenedor

			if (showCharactersButton) {
				showCharactersButton.addEventListener('click', this.handleShowCharacters.bind(this));
			}
		}
	}

	async handleShowCharacters() {
		if (this.characterCountInput && this.charactersContainer) {
			// Verificamos que las referencias no sean nulas
			const characterCount = parseInt(this.characterCountInput.value, 10);
			if (!isNaN(characterCount)) {
				this.charactersContainer.innerHTML = ''; // Limpiamos el contenido del contenedor
				for (let i = 1; i <= characterCount; i++) {
					const characterData = await getRickMorty(i);
					const firstEpisodeName = await this.getFirstEpisodeName(characterData.episode[0]);
					this.renderCharacter(characterData, firstEpisodeName);
				}
			}
		}
	}

	async getFirstEpisodeName(episodeUrl: string): Promise<string> {
		try {
			const episodeData = await fetch(episodeUrl).then((res) => res.json());
			return episodeData.name;
		} catch (error) {
			console.error('Error fetching episode data:', error);
			return 'Unknown';
		}
	}

	renderCharacter(characterData: any, firstEpisodeName: string) {
		if (this.charactersContainer) {
			const characterElement = document.createElement('my-character');
			characterElement.setAttribute('image', characterData.image || 'not declared');
			characterElement.setAttribute('name', characterData.name || 'not declared');
			characterElement.setAttribute('status', characterData.status || 'not declared');
			characterElement.setAttribute('species', characterData.species || 'not declared');
			characterElement.setAttribute('type', characterData.type || 'not declared');
			characterElement.setAttribute('origin', characterData.origin.name || 'not declared');
			characterElement.setAttribute('nameoffirstepisode', firstEpisodeName || 'not declared');
			this.charactersContainer.appendChild(characterElement);
		}
	}
}

customElements.define('app-container', AppContainer);
