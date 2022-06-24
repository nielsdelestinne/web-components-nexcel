import './app.element.scss';
import {defineCustomElement, singletonRouter} from '@nexcel/framework';
import {routes} from './app.routing';
import {HomeFeature} from './features/home/home.feature';

@defineCustomElement('nexcel-root')
export class AppElement extends HTMLElement {
  private shadowRootElement: Element;

  connectedCallback() {
    this.innerHTML = `
      <div class="flex-container">
          <section class="shadow-root flex-item">
              <!-- shadow DOM-->
          </section>
      </div>
    `;

    this.shadowRootElement = this.getElementsByClassName('shadow-root')[0];
    singletonRouter.initialize(routes, this.shadowRootElement);
    singletonRouter.routeToComponent(HomeFeature.route);
  }
}
