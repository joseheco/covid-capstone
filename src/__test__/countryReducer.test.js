import dataCovid from '../redux/covid/dataCovid';

const mockStore = {
  countriesReducer: [
    {
      ID: '4ac04574-317b-40f6-89d9-d8a0d2a257b0',
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Slug: 'afghanistan',
      NewConfirmed: 0,
      TotalConfirmed: 176918,
      NewDeaths: 0,
      TotalDeaths: 7651,
      NewRecovered: 0,
      TotalRecovered: 0,
      Date: '2022-03-18T12:19:17.886Z',
      Premium: {},
    },
    {
      ID: '1cbf1306-98b8-4f82-9bb7-89719c59db3c',
      Country: 'Cyprus',
      CountryCode: 'CY',
      Slug: 'cyprus',
      NewConfirmed: 0,
      TotalConfirmed: 367743,
      NewDeaths: 0,
      TotalDeaths: 905,
      NewRecovered: 0,
      TotalRecovered: 0,
      Date: '2022-03-18T12:19:17.886Z',
      Premium: {},
    },
  ],
};

describe('Test', () => {
  test('Initial State', () => {
    expect(dataCovid([], {})).toEqual([]);
  });
});

describe('Mock covidData Reducer', () => {
  test('Test covidData Reducer With Mock Data', () => {
    const LOAD_DATA = 'LOAD_DATA';
    const store = mockStore;
    const action = {
      type: LOAD_DATA,
      payload: {
        countriesReducer: [
          {
            ID: '4ac04574-317b-40f6-89d9-d8a0d2a257b0',
            Country: 'Afghanistan',
            CountryCode: 'AF',
            Slug: 'afghanistan',
            NewConfirmed: 0,
            TotalConfirmed: 176918,
            NewDeaths: 0,
            TotalDeaths: 7651,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: '2022-03-18T12:19:17.886Z',
            Premium: {},
          },
          {
            ID: '1cbf1306-98b8-4f82-9bb7-89719c59db3c',
            Country: 'Cyprus',
            CountryCode: 'CY',
            Slug: 'cyprus',
            NewConfirmed: 0,
            TotalConfirmed: 367743,
            NewDeaths: 0,
            TotalDeaths: 905,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: '2022-03-18T12:19:17.886Z',
            Premium: {},
          },
        ],
      },
    };
    expect(dataCovid(store, action)).toEqual(action.payload);
  });
});
