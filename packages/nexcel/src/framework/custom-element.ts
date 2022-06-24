export abstract class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  bubbleAsCustomEvent(customEventType: string, originalEvent: Event): void {
    originalEvent.stopPropagation();
    this.dispatchEvent(new CustomEvent<Event>(customEventType, originalEvent));
  }

  protected addClickEventListener(uniqueClassName: string, handleEvent: (event) => void): CustomElement {
    this.getElementsByClassName(uniqueClassName)[0]
      .addEventListener('click', event => {
        event.stopPropagation();
        handleEvent(event);
      })
    return this;
  }

  abstract connectedCallback();
}
