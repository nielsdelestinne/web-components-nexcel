import {CustomElement, defineCustomElement} from "@nexcel/framework";
import './home.element.scss';
import {EventType} from "../../../framework/event-type";

@defineCustomElement('nexcel-home')
export class HomeElement extends CustomElement {

  private top = 'x';

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

    this.getElementsByClassName('button-new')[0].addEventListener('click', event => this.handleCreateNew(event))
    this.getElementsByClassName('button-load')[0].addEventListener('click', event => this.handleLoadExisting(event))
  }

  private handleCreateNew(event: Event) {
    this.emit(EventType.CREATE_NEW_SPREADSHEET, event);
  }

  private handleLoadExisting(event: Event) {
    this.emit(EventType.LOAD_EXISTING_SPREADSHEET, event);
  }
}
