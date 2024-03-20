import styles from './Character.css';

export enum Attribute { //enum es algo de ts, permiten definir un conjunto de constantes con nombres
	'image' = 'image',
	'name' = 'name',
	'uid' = 'uid',
	'status' = 'status',
	'species' = 'species',
	'type' = 'type',
	'origin' = 'origin',
	'nameoffirstepisode' = 'nameoffirstepisode',
}

class Character extends HTMLElement {
	uid?: number; //cuando se pone id hay que cambiarla y ponerle como uid
	name?: string; // hay que agregar ? para que espere a info dinamica
	image?: string; //los dos puntos despues de cada propiedad y o que viene es para definirlas
	status?: string;
	species?: string;
	type?: string;
	origin?: string;
	nameoffirstepisode?: string;

	//igual que en js
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//diferente a js
	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			name: null,
			uid: null,
			status: null,
			species: null,
			type: null,
			origin: null,
			nameoffirstepisode: null,
		};
		return Object.keys(attrs); // return ['image','name', 'uid', ....]; (es otra forma m[as simple de hacerlo pero a que esta contando es mas rigurosa])
	}

	//diferente a js
	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		// esta rayita | significa "o", string o undefined
		switch (propName) {
			case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined; // switch hay que hacerlo cada vez que la propiedad sea de tipo number
				break;

			default:
				this[propName] = newValue; //siempre hay que dejar esta linea
				break;
		}
		this.render();
	}

	//igual que en js
	connectedCallback() {
		this.render();
	}

	//diferente a js
	render() {
		if (this.shadowRoot) {
			//si el shadowroot existe entonces se va a hacer lo siguiente
			this.shadowRoot.innerHTML = `
      <section>
        <img src="${this.image}"><img>
        <h1><b>Name:</b> ${this.name}</h1>
        <p><b>Status:</b> ${this.status}</p>
        <p><b>Species:</b> ${this.species}</p>
        <p><b>Type:</b> ${this.type}</p>
        <p><b>Origin:</b> ${this.origin}</p>
        <p><b>First Episode:</b> ${this.nameoffirstepisode}</p>
        </section>
        `;
		}
		const cssCharacter = this.ownerDocument.createElement('style');
		cssCharacter.innerHTML = styles;
		this.shadowRoot?.appendChild(cssCharacter);
	}
}

export default Character;
customElements.define('my-character', Character);
