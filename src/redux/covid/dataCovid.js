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
      return action.payload;
    default:
      return state;
  }
};

export const loadData = () => async (dispatch) => {
  const response = await fetch(dataURL);
  const data = await response.json();
  const allData = data.Countries.map((e) => {
    const currentSong = {
      id: e.ID,
      country: e.Country,
    };
    return currentSong;
  });
  dispatch(getData(allData));
}

export default dataCovid;
