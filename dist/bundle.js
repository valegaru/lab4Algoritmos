(()=>{"use strict";const t=t=>{return e=void 0,n=void 0,s=function*(){try{return yield fetch("https://rickandmortyapi.com/api/character/"+t).then((t=>t.json()))}catch(t){console.error(t)}},new((i=void 0)||(i=Promise))((function(t,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function r(t){try{c(s.throw(t))}catch(t){o(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(a,r)}c((s=s.apply(e,n||[])).next())}));var e,n,i,s};var e;!function(t){t.image="image",t.name="name",t.uid="uid",t.status="status",t.species="species",t.type="type",t.origin="origin",t.nameoffirstepisode="nameoffirstepisode"}(e||(e={}));class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,name:null,uid:null,status:null,species:null,type:null,origin:null,nameoffirstepisode:null})}attributeChangedCallback(t,n,i){t===e.uid?this.uid=i?Number(i):void 0:this[t]=i,this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n      <section>\n        <img src="${this.image}"><img>\n        <h1><b>Name:</b> ${this.name}</h1>\n        <p><b>Status:</b> ${this.status}</p>\n        <p><b>Species:</b> ${this.species} years old</p>\n        <p><b>Type:</b> ${this.type}</p>\n        <p><b>Origin:</b> ${this.origin}</p>\n        <p><b>First Episode:</b> ${this.nameoffirstepisode}</p>\n        </section>\n        `)}}customElements.define("my-character",n);class i extends HTMLElement{constructor(){super(),this.characters=[],this.attachShadow({mode:"open"})}connectedCallback(){return e=this,n=void 0,s=function*(){for(let e=1;e<=5;e++){const n=yield t(e);console.log(n),this.render(n)}},new((i=void 0)||(i=Promise))((function(t,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function r(t){try{c(s.throw(t))}catch(t){o(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(a,r)}c((s=s.apply(e,n||[])).next())}));var e,n,i,s}render(t){this.shadowRoot&&(this.shadowRoot.innerHTML+=`<my-character\n\t\t\timage='${t.image}'\n\t\t\tname='${t.name}'\n\t\t\tstatus='${t.status}'\n\t\t\tspecies='${t.species}'\n\t\t\ttype='${t.type}'\n\t\t\torigin='${t.origin.name}'\n\t\t\tnameoffirstepisode='${t.episode}'></my-character>`)}}customElements.define("app-container",i)})();