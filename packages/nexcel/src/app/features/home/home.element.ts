import {defineCustomElement} from "@nexcel/framework";

@defineCustomElement('nexcel-home')
export class HomeElement extends HTMLElement {

  connectedCallback() {
    const title = 'Nexcel: the next Excel!';
    this.innerHTML = `
        <div id="welcome">
          <h1>${title} <span>(Exploration days)</span></h1>
        </div>
      `;
  }

}
