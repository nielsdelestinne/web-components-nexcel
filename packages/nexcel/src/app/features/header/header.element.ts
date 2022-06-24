import './header.element.scss';
import {CustomElement, defineCustomElement, EventType} from "@nexcel/framework";

@defineCustomElement('nexcel-header')
export class HeaderElement extends CustomElement {

  connectedCallback() {
    this.innerHTML = `
      <section id="header" class="flex-container">
        <div class="flex-item">
          <div class="flex-container shadow-root">
              <button class="flex-item button-back">Back</button>
          </div>
        </div>
      </section>
    `;

    this.addClickEventListener('button-back', event => this.bubble(EventType.BACK_HOME, event))
  }

}
