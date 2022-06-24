import './header.element.scss';
import {defineCustomElement} from "../../../../framework/define-custom-element.decorator";

@defineCustomElement('nexcel-header')
export class HeaderElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const title = 'Nexcel: the next Excel!';
    this.innerHTML = `
        <div id="welcome">
          <h1>${title} <span>(Exploration days)</span></h1>
        </div>
      `;
  }
}

// customElements.define('nexcel-header', HeaderElement);
