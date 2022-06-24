import {EventType} from "./event-type";

export abstract class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  bubble(eventType: EventType, originalEvent: Event): void {
    originalEvent.stopPropagation();
    this.dispatchEvent(new CustomEvent<Event>(eventType, originalEvent));
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
