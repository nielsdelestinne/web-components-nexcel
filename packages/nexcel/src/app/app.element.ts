export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `
      <div class="wrapper">
        <div class="container">
            <nexcel-header></nexcel-header>
            <nexcel-spreadsheet></nexcel-spreadsheeT>
        </div>
      </div>
    `;
  }
}

customElements.define('nexcel-root', AppElement);
