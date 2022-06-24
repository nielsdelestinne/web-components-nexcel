import {defineCustomElement} from "@nexcel/framework";
import './home.element.scss';

@defineCustomElement('nexcel-home')
export class HomeElement extends HTMLElement {

  constructor(private identifier: string = 'homeElement') {
    super();
    this.id = this.identifier;
  }
  connectedCallback() {
    const title = 'Nexcel';
    const subTitle = 'The next Excel';
    this.innerHTML = `
      <section id="home" class="flex-container">
        <div class="flex-item">
          <h1>${title} <br> <span>${subTitle}</span></h1>
          <div class="flex-container shadow-root">
              <button class="flex-item button-new" id="create-new" onclick="${this.identifier}.createNew()">New</button>
              <button class="flex-item button-load" onclick="${this.identifier}.loadExisting()">Load</button>
          </div>
        </div>
      </section>
    `;
  }

  createNew() {
    alert('new');
  }

  loadExisting() {
    alert('existing');
  }

}
