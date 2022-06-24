import {CustomElement, defineCustomElement, singletonRouter} from "@nexcel/framework";
import './load-spreadsheet.element.scss';
import {SpreadsheetFeature} from "../spreadsheet/spreadsheet.feature";

@defineCustomElement('nexcel-load-spreadsheet')
export class LoadSpreadsheetElement extends CustomElement {

  connectedCallback() {
    this.innerHTML = `
      <section id="load-spreadsheet" class="flex-container">
        <div class="flex-item">
          <h1>Load <br> <span>your existing Nexcel spreadsheet</span></h1>
          <hr>
          <div class="flex-container shadow-root">
              <input type="file" class="flex-item">
              <button class="flex-item button-upload">Upload</button>
          </div>
        </div>
      </section>
    `;

    this.addClickEventListener('button-upload', event => LoadSpreadsheetElement.upload(event));
  }

  private static upload(event: Event) {
    alert('bleep bloop: uploading your file');
    singletonRouter.routeToComponent(SpreadsheetFeature.route)

  }
}
