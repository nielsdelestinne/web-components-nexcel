import {CustomElement, defineCustomElement, singletonRouter} from "@nexcel/framework";
import './home.element.scss';
import {SpreadsheetFeature} from "../spreadsheet/spreadsheet.feature";
import {LoadSpreadsheetFeature} from "../load-spreadsheet/load-spreadsheet.feature";

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

    this.addClickEventListener('button-new', () => singletonRouter.routeToComponent(SpreadsheetFeature.route))
    this.addClickEventListener('button-load', event => this.handleLoadExisting(event));
  }

  private handleLoadExisting(event: Event) {
    console.log('Loading an existing spreadsheet');
    this.bubbleAsCustomEvent(LoadSpreadsheetFeature.route.name, event);
  }
}
