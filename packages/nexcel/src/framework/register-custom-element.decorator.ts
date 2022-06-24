export const registerCustomElement = (name: string) => {
  return (target: Function) => {
    console.log('inner');
  }
}
