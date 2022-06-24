import './app.element.scss';
import {CustomElement, defineCustomElement, singletonRouter} from '@nexcel/framework';
import {routes} from './app.routing';
import {HomeFeature} from './features/home/home.feature';

@defineCustomElement('nexcel-root')
export class AppElement extends CustomElement {

  connectedCallback() {
    this.innerHTML = `
      <div class="flex-container">
          <section class="${CustomElement.SHADOW_ROOT_UNIQUE_CLASS_NAME} flex-item">
              <!-- shadow DOM-->
          </section>
      </div>
    `;

    singletonRouter.initialize(routes, this.shadowRootElement);
    singletonRouter.routeToComponent(HomeFeature.route);
  }
}
