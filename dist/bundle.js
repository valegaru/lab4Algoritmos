(()=>{"use strict";var t={83:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"section {\n\tbackground-color: #f9f9f9;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n\tpadding: 20px;\n\tmargin: 20px;\n\tmax-width: 300px;\n\tfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\nimg {\n\twidth: 100%;\n\tborder-radius: 10px;\n\tmargin-bottom: 10px;\n}\n\nh1 {\n\tfont-size: 24px;\n\tmargin-bottom: 10px;\n}\n\np {\n\tmargin-bottom: 5px;\n}\n\nb {\n\tcolor: #333;\n}\n",""]);const c=i},647:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([t.id,"* {\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tbox-sizing: border-box;\n}\n\n#enterNumber {\n\tbackground-color: #f9f9f9;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n\tpadding: 20px;\n\tmargin: 20px auto; /* Centra horizontalmente */\n\tmax-width: 500px;\n\tdisplay: flex;\n\tflex-direction: column; /* Alinea los elementos en columna */\n\tjustify-content: center; /* Centra horizontalmente */\n\talign-items: center; /* Centra verticalmente */\n\tmargin-bottom: 20px; /* Espacio entre el contenedor y el #charactersContainer */\n}\n\nlabel {\n\tmargin-bottom: 10px; /* Espacio entre el label y el input */\n}\n\ninput[type='number'],\nbutton {\n\tpadding: 10px;\n\tmargin: 5px 0; /* Espacio entre el input/botón */\n\tborder: none;\n\tborder-radius: 5px;\n\tfont-size: 16px;\n\tcursor: pointer;\n\ttransition: background-color 0.3s ease;\n}\n\ninput[type='number'] {\n\twidth: 220px;\n\tbackground-color: rgb(88, 209, 209);\n}\n\nbutton {\n\tbackground-color: #4caf50;\n\tcolor: white;\n}\n\nbutton:hover {\n\tbackground-color: #14df1e;\n}\n\n#charactersContainer {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n}\n\nmy-character {\n\twidth: 23%;\n\tdisplay: flex;\n}\n\n@media only screen and (max-width: 700px) {\n\tmy-character {\n\t\twidth: 45% !important;\n\t}\n}\n",""]);const c=i},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:t=>{t.exports=function(t){return t[1]}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t=e(647);const n=t=>{return n=void 0,e=void 0,o=function*(){try{return yield fetch("https://rickandmortyapi.com/api/character/"+t).then((t=>t.json()))}catch(t){console.error(t)}},new((r=void 0)||(r=Promise))((function(t,a){function i(t){try{s(o.next(t))}catch(t){a(t)}}function c(t){try{s(o.throw(t))}catch(t){a(t)}}function s(n){var e;n.done?t(n.value):(e=n.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}s((o=o.apply(n,e||[])).next())}));var n,e,r,o};var r,o=e(83);!function(t){t.image="image",t.name="name",t.uid="uid",t.status="status",t.species="species",t.type="type",t.origin="origin",t.nameoffirstepisode="nameoffirstepisode"}(r||(r={}));class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,name:null,uid:null,status:null,species:null,type:null,origin:null,nameoffirstepisode:null})}attributeChangedCallback(t,n,e){t===r.uid?this.uid=e?Number(e):void 0:this[t]=e,this.render()}connectedCallback(){this.render()}render(){var t;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n      <section>\n        <img src="${this.image}"><img>\n        <h1><b>Name:</b> ${this.name}</h1>\n        <p><b>Status:</b> ${this.status}</p>\n        <p><b>Species:</b> ${this.species}</p>\n        <p><b>Type:</b> ${this.type}</p>\n        <p><b>Origin:</b> ${this.origin}</p>\n        <p><b>First Episode:</b> ${this.nameoffirstepisode}</p>\n        </section>\n        `);const n=this.ownerDocument.createElement("style");n.innerHTML=o.A,null===(t=this.shadowRoot)||void 0===t||t.appendChild(n)}}customElements.define("my-character",a);var i=function(t,n,e,r){return new(e||(e=Promise))((function(o,a){function i(t){try{s(r.next(t))}catch(t){a(t)}}function c(t){try{s(r.throw(t))}catch(t){a(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,c)}s((r=r.apply(t,n||[])).next())}))};class c extends HTMLElement{constructor(){super(),this.characters=[],this.characterCountInput=null,this.charactersContainer=null,this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML='\n\t\t\t<section id="enterNumber">\n                <label for="characterCount">Number of Characters to Show:</label>\n                <input type="number" id="characterCount" name="characterCount" min="1" placeholder="Enter number of characters">\n                <button id="showCharactersButton">Show Characters</button>\n\t\t\t\t\t\t\t\t</section>\n                <section id="charactersContainer"></section>\n            ',this.characterCountInput=this.shadowRoot.querySelector("#characterCount");const n=this.shadowRoot.querySelector("#showCharactersButton");this.charactersContainer=this.shadowRoot.querySelector("#charactersContainer"),n&&n.addEventListener("click",this.handleShowCharacters.bind(this));const e=this.ownerDocument.createElement("style");e.innerHTML=t.A,this.shadowRoot.appendChild(e)}}handleShowCharacters(){return i(this,void 0,void 0,(function*(){if(this.characterCountInput&&this.charactersContainer){const t=parseInt(this.characterCountInput.value,10);if(!isNaN(t)){this.charactersContainer.innerHTML="";for(let e=1;e<=t;e++){const t=yield n(e),r=yield this.getFirstEpisodeName(t.episode[0]);this.renderCharacter(t,r)}}}}))}getFirstEpisodeName(t){return i(this,void 0,void 0,(function*(){try{return(yield fetch(t).then((t=>t.json()))).name}catch(t){return console.error("Error fetching episode data:",t),"Unknown"}}))}renderCharacter(n,e){var r;if(this.charactersContainer){const t=document.createElement("my-character");t.setAttribute("image",n.image||"not declared"),t.setAttribute("name",n.name||"not declared"),t.setAttribute("status",n.status||"not declared"),t.setAttribute("species",n.species||"not declared"),t.setAttribute("type",n.type||"not declared"),t.setAttribute("origin",n.origin.name||"not declared"),t.setAttribute("nameoffirstepisode",e||"not declared"),this.charactersContainer.appendChild(t)}const o=this.ownerDocument.createElement("style");o.innerHTML=t.A,null===(r=this.shadowRoot)||void 0===r||r.appendChild(o)}}customElements.define("app-container",c)})()})();