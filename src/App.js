import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore'
import './App.css';
import Home from './components/Home'
// import CountryDetails from './components/CountryDetails'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/:country" element={<CountryDetails />}/> */}
      </Routes>
    </BrowserRouter>
  </Provider>
)

export default App;
