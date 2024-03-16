import { getRickMorty } from './data/dataFetch';
import './components/indexPadre';
import MyCharacter, { Attribute } from './components/Character/Character';

class AppContainer extends HTMLElement {
	characters: MyCharacter[] = []; //creo un arreglo de trabajadores porque a data tiene varios trabajadores y voy a renderizar de mis componentes Trabajador

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		//datarick.forEach((user) => {
		//const profileCard = this.ownerDocument.createElement('my-character') as MyCharacter;
		//profileCard.setAttribute(Attribute.name, user.name);
		//profileCard.setAttribute(Attribute.uid, String(user.id));
		//profileCard.setAttribute(Attribute.image, user.image);
		//profileCard.setAttribute(Attribute.status, user.status);
		//profileCard.setAttribute(Attribute.species, user.species);
		//profileCard.setAttribute(Attribute.type, user.type);
		//profileCard.setAttribute(Attribute.origin, user.origin);
		//profileCard.setAttribute(Attribute.nameoffirstepisode, user.episodio);
		//this.characters.push(profileCard);
		//});
	}

	async connectedCallback() {
		for (let i = 1; i <= 5; i++) {
			const datarick = await getRickMorty(i); //a partir de aqui que estoy guardando lo que hago fetch en data, renderizo
			console.log(datarick);
			this.render(datarick);
		}
	}

	render(datarick: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `<my-character
			image='${datarick.image}'
			name='${datarick.name}'
			status='${datarick.status}'
			species='${datarick.species}'
			type='${datarick.type}'
			origin='${datarick.origin.name}'
			nameoffirstepisode='${datarick.episode}'></my-character>`;
		}
	}
}

customElements.define('app-container', AppContainer);
