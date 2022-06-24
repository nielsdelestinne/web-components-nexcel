import {Route} from "./route";

class Router {
  private rootElement: Element;

  initialize(routes: Route[], rootElement: Element) {
    this.rootElement = rootElement;
    for (const route of routes) {
      rootElement.addEventListener(route.name, () => this.routeToComponent(route))
    }
  }

  routeToComponent(route: Route) {
    console.log(route);
    console.log(this.rootElement.innerHTML);
    this.rootElement.innerHTML = route.component
  }

}

export const singletonRouter = new Router();
