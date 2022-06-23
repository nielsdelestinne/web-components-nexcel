export function libSpreadsheet(): string {
  return 'lib-spreadsheet';
}

export class Spreadsheet extends HTMLElement {
  constructor(private dimensions: Dimension = {height: 500, width: 500}) {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <canvas id="spread-sheet-canvas"
        height="${this.dimensions.height}px"
        width="${this.dimensions.width}px"
        style="background-color:black;"></canvas>
    `;
  }
}

export type Dimension = Readonly<{
  width: number;
  height: number;
}>;

customElements.define('nexcel-spreadsheet', Spreadsheet);
