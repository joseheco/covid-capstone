import { loadDataCountries } from '../redux/covid/dataCovid';

describe('When give a wrong action at reducer ', () => {
  it('action is wrong, we return no change', () => {
    const state = [{
      ID: '4ac04574-317b-40f6-89d9-d8a0d2a257b0',
      Country: 'Afghanistan',
      CountryCode: 'AF',
    }];
    const WRONG_ACTION = 'WRONG_ACTION';
    const action = { type: WRONG_ACTION, payload: state };
    const result = loadDataCountries([], action);
    expect(result).toEqual([]);
  });
});
