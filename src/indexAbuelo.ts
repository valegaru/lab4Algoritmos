import { getRickMorty } from './data/dataFetch';
import './components/indexPadre';
import MyCharacter, { Attribute } from './components/Character/Character';

class AppContainer extends HTMLElement {
	character: MyCharacter[] = []; //creo un arreglo de trabajadores porque a data tiene varios trabajadores y voy a renderizar de mis componentes Trabajador

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		this.render();
		const data = await getRickMorty(8); //a partir de data renderizo
	}

	render() {}
}

customElements.define('app-container', AppContainer);
