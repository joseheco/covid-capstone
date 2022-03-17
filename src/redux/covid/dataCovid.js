const LOAD_DATA = 'LOAD_DATA';

const initialState = [];

const dataURL = 'https://api.covid19api.com/summary';

export const getData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

const dataCovid = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export const loadDataCountries = () => async (dispatch) => {
  const response = await fetch(dataURL);
  const data = await response.json();
  const allData = data.Countries.map((e) => {
    const currentData = {
      id: e.ID,
      country: e.Country,
      NewConfirmed: e.NewConfirmed,
      TotalConfirmed: e.TotalConfirmed,
      NewDeaths: e.NewDeaths,
      TotalDeaths: e.TotalDeaths,
      NewRecovered: e.NewRecovered,
      TotalRecovered: e.TotalRecovered,
      Date: e.Date,
    };
    return currentData;
  });
  dispatch(getData(allData));
}

export default dataCovid;
