import {HomeFeature} from './features/home/home.feature';
import {SpreadsheetFeature} from './features/spreadsheet/spreadsheet.feature';
import {Route} from '@nexcel/framework';
import {LoadSpreadsheetFeature} from "./features/load-spreadsheet/load-spreadsheet.feature";

export const routes: Route[] = [HomeFeature.route, SpreadsheetFeature.route, LoadSpreadsheetFeature.route];
