import {Route} from '@nexcel/framework';

export class HomeFeature {
  static readonly route: Route = {
    name: 'home',
    component: `<nexcel-home></nexcel-home>`,
  };
}
