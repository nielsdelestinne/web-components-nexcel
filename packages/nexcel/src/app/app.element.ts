import './app.element.scss'
import {defineCustomElement} from "@nexcel/framework";

@defineCustomElement('nexcel-root')
export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
      <div class="wrapper">
        <div class="container">
            <section class="shadow-root">
                <!-- shadow DOM-->
            </section>
        </div>
      </div>
    `;

    const shadowRoot = this.getElementsByClassName('shadow-root')[0];

    shadowRoot.innerHTML = `
      <nexcel-header></nexcel-header>
      <nexcel-spreadsheet></nexcel-spreadsheeT>
    `;
  }
}
