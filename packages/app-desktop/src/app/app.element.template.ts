function createTemplate(): HTMLTemplateElement {
  const templateElement = document.createElement('template');

  templateElement.innerHTML = `
    <style>
      :host {
        display: block;
        contain: content;
        text-align: center;
        background: papayawhip;
        max-width: 500px;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(128, 100, 38, 0.34);
        border-radius: 8px;
        border: 2px dashed #ccc049;
      }
    </style>
    <slot></slot>
  `;

  return templateElement;
}

export const template = createTemplate();
