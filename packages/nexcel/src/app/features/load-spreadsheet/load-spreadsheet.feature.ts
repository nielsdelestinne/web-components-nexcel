import {Route} from '@nexcel/framework';

export class LoadSpreadsheetFeature {
  static readonly route: Route = {
    name: 'load-spreadsheet',
    component: `<nexcel-load-spreadsheet></nexcel-load-spreadsheet>`,
  };
}
