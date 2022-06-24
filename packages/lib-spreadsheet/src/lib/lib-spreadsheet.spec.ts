import {spreadsheet} from '../../../nexcel/src/app/features/spreadsheet/lib-spreadsheet';

describe('libSpreadsheet', () => {
  it('should work', () => {
    expect(spreadsheet()).toEqual('lib-spreadsheet');
  });
});
