import './app.element.scss';
import {template} from "./app.element.template";

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('nexcel-root', AppElement);
