import {CustomElement, defineCustomElement, EventType} from "@nexcel/framework";
import './home.element.scss';

@defineCustomElement('nexcel-home')
export class HomeElement extends CustomElement {

  connectedCallback() {
    this.innerHTML = `
      <section id="home" class="flex-container">
        <div class="flex-item">
          <h1>Nexcel <br> <span>The next Excel</span></h1>
          <div class="flex-container shadow-root">
              <button class="flex-item button-new">New</button>
              <button class="flex-item button-load">Load</button>
          </div>
        </div>
      </section>
    `;

    this.addClickEventListener('button-new', event => this.handleCreateNew(event))
    this.addClickEventListener('button-load', event => this.handleCreateNew(event));
  }

  private handleCreateNew(event: Event) {
    console.log('Creating a new spreadsheet');
    this.bubble(EventType.CREATE_NEW_SPREADSHEET, event);
  }

  private handleLoadExisting(event: Event) {
    console.log('Loading an existing spreadsheet');
    this.bubble(EventType.LOAD_EXISTING_SPREADSHEET, event);
  }
}
