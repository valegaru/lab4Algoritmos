import styles from './indexAbuelo.css';
import { getRickMorty } from './data/dataFetch';
import './components/indexPadre';
import MyCharacter, { Attribute } from './components/Character/Character';

class AppContainer extends HTMLElement {
	characters: MyCharacter[] = [];
	characterCountInput: HTMLInputElement | null = null;
	charactersContainer: HTMLDivElement | null = null;

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
			<section id="enterNumber">
                <label for="characterCount">Number of Characters to Show:</label>
                <input type="number" id="characterCount" name="characterCount" min="1" placeholder="Enter number of characters">
                <button id="showCharactersButton">Show Characters</button>
								</section>
                <section id="charactersContainer"></section>
            `;

			this.characterCountInput = this.shadowRoot.querySelector('#characterCount');
			const showCharactersButton = this.shadowRoot.querySelector('#showCharactersButton');
			this.charactersContainer = this.shadowRoot.querySelector('#charactersContainer');

			if (showCharactersButton) {
				showCharactersButton.addEventListener('click', this.handleShowCharacters.bind(this));
			}
			const cssContainer = this.ownerDocument.createElement('style'); // Agregar estilos
			cssContainer.innerHTML = styles;
			this.shadowRoot.appendChild(cssContainer);
		}
	}

	async handleShowCharacters() {
		if (this.characterCountInput && this.charactersContainer) {
			const characterCount = parseInt(this.characterCountInput.value, 10);
			if (!isNaN(characterCount)) {
				this.charactersContainer.innerHTML = ''; //  se vacia antes de volver a renderizar
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
		const cssCharacter = this.ownerDocument.createElement('style'); //agregar estilos a las cartas
		cssCharacter.innerHTML = styles;
		this.shadowRoot?.appendChild(cssCharacter);
	}
}

customElements.define('app-container', AppContainer);
