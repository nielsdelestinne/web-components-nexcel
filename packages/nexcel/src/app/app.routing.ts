import {HomeFeature} from './features/home/home.feature';
import {SpreadsheetFeature} from './features/spreadsheet/spreadsheet.feature';
import {Route} from '@nexcel/framework';

export const routes: Route[] = [HomeFeature.route, SpreadsheetFeature.route];
