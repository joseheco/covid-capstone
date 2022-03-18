import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CountryDetails from '../components/CountryDetails';

describe('Testing Country Details', () => {
  it('Render the CountryDetails page and match with snapshot', () => {
    const details = renderer.create(
        <Provider store={store}>
          <CountryDetails />
        </Provider>,
      );
    expect(details.toJSON()).toMatchSnapshot();
  });
});