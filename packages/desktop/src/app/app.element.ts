import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'Nexcel: the next Excel';
    this.innerHTML = `
        <h1>${title}</h1>
        <template></template>
    `;
  }
}
customElements.define('nexcel-root', AppElement);
