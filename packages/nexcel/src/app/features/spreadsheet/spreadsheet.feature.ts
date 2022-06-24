import {Route} from '@nexcel/framework';

export class SpreadsheetFeature {
  static readonly route: Route = {
    name: 'spreadsheet',
    component: `
      <nexcel-header></nexcel-header>
      <nexcel-spreadsheet></nexcel-spreadsheet>
    `,
  };
}
