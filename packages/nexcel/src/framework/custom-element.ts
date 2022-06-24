export abstract class CustomElement extends HTMLElement {

  protected static readonly SHADOW_ROOT_UNIQUE_CLASS_NAME = 'shadow-root';

  constructor() {
    super();
  }

  abstract connectedCallback();

  protected addClickEventListener(uniqueClassName: string, handleEvent: (event) => void): CustomElement {
    this.getElementsByClassName(uniqueClassName)[0]
      .addEventListener('click', event => {
        event.stopPropagation();
        handleEvent(event);
      })
    return this;
  }

  protected bubbleAsCustomEvent(customEventType: string, originalEvent: Event): void {
    originalEvent.stopPropagation();
    this.dispatchEvent(new CustomEvent<Event>(customEventType, originalEvent));
  }


  get shadowRootElement(): Element {
    return this.getElementsByClassName(CustomElement.SHADOW_ROOT_UNIQUE_CLASS_NAME)[0];
  }
}
