import './app.element.scss'
import {defineCustomElement} from "@nexcel/framework";
import {EventType} from "../framework/event-type";

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

    shadowRoot.addEventListener(EventType.CREATE_NEW_SPREADSHEET, this.handleEvent)
  }

  private handleEvent() {
    console.log('handle in app');
  }
}
