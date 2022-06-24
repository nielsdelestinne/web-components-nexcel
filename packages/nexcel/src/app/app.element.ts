import './app.element.scss'
import {defineCustomElement} from "@nexcel/framework";
import {EventType} from "../framework/event-type";

@defineCustomElement('nexcel-root')
export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  private shadowRootElement: Element;

  connectedCallback() {
    this.innerHTML = `
      <div class="flex-container">
          <section class="shadow-root flex-item">
              <!-- shadow DOM-->
          </section>
      </div>
    `;

    this.shadowRootElement = this.getElementsByClassName('shadow-root')[0];

    this.shadowRootElement.innerHTML = `
      <nexcel-home></nexcel-home>
    `;

    this.shadowRootElement.addEventListener(EventType.CREATE_NEW_SPREADSHEET, event => this.handleCreateNewSpreadsheet(event))
    this.shadowRootElement.addEventListener(EventType.BACK_HOME, event => this.handleBackHome(event))
  }

  private handleCreateNewSpreadsheet(event: Event) {
    this.shadowRootElement.innerHTML = `
      <nexcel-header></nexcel-header>
      <nexcel-spreadsheet></nexcel-spreadsheet>
    `;
  }

  private handleBackHome(event: Event) {
    this.shadowRootElement.innerHTML = `
      <nexcel-home></nexcel-home>
    `;
  }
}
