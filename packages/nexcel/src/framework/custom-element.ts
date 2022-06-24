export abstract class CustomElement extends HTMLElement {

  constructor() {
    super();
    this.id = `ID_${Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}`;
  }

  abstract connectedCallback();
}
