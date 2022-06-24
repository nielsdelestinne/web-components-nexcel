import {EventType} from "./event-type";

export abstract class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  emit(eventType: EventType, originalEvent: Event): void {
    this.dispatchEvent(new CustomEvent<Event>(eventType, originalEvent));
  }

  abstract connectedCallback();
}
