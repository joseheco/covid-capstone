import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore'
import './App.css';
import Home from './components/Home'
import CountryDetails from './components/CountryDetails'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<CountryDetails />}/>
      </Routes>
    </Provider>
  </BrowserRouter>
)

export default App;
