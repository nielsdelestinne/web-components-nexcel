import {CustomElement, defineCustomElement} from "@nexcel/framework";
import './home.element.scss';

@defineCustomElement('nexcel-home')
export class HomeElement extends CustomElement {

  connectedCallback() {
    this.innerHTML = `
      <section id="home" class="flex-container">
        <div class="flex-item">
          <h1>Nexcel <br> <span>The next Excel</span></h1>
          <div class="flex-container shadow-root">
              <button class="flex-item button-new" id="create-new" onclick="${this.id}.createNew()">New</button>
              <button class="flex-item button-load" onclick="${this.id}.loadExisting()">Load</button>
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
