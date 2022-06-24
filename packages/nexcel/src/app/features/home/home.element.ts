import {defineCustomElement} from "@nexcel/framework";
import './home.element.scss';

@defineCustomElement('nexcel-home')
export class HomeElement extends HTMLElement {

  connectedCallback() {
    const title = 'Nexcel';
    const subTitle = 'The next Excel';
    this.innerHTML = `
      <section id="home" class="flex-container">
        <div class="flex-item">
          <h1>${title} <br> <span>${subTitle}</span></h1>
          <div class="flex-container">
              <button class="flex-item button-new" id="create-new">New</button>
              <button class="flex-item button-load">Load</button>
          </div>
        </div>
      </section>
    `;
  }

}
