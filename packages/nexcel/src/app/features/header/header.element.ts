import './header.element.scss';
import {registerCustomElement} from "../../../framework/register-custom-element.decorator";

@registerCustomElement('nexcel-header')
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

customElements.define('nexcel-header', HeaderElement);
