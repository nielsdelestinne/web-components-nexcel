export const defineCustomElement = (name: string) => {
  return (target: Object) => {
    customElements.define(name, target as CustomElementConstructor)
  }
}
