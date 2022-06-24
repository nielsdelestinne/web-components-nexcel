import './app.element.scss'
import {defineCustomElement} from "@nexcel/framework";

@defineCustomElement('nexcel-root')
export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
      <div class="flex-container">
          <section class="shadow-root flex-item">
              <!-- shadow DOM-->
          </section>
      </div>
    `;

    const shadowRoot = this.getElementsByClassName('shadow-root')[0];

    shadowRoot.innerHTML = `
      <nexcel-home></nexcel-home>
    `;
  }
}
