import {defineCustomElement} from "@nexcel/framework";

@defineCustomElement('nexcel-spreadsheet')
export class SpreadsheetElement extends HTMLElement {

  connectedCallback() {
    const dimensions: Dimension = {height: 750, width: 1900};

    this.innerHTML = `
       <canvas id="spread-sheet-canvas"
        height="${dimensions.height}px"
        width="${dimensions.width}px"
        style="background-color:lightgray;"></canvas>
    `;
  }

}

export type Dimension = Readonly<{
  width: number;
  height: number;
}>;
