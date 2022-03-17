import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadDataCountries } from '../redux/covid/dataCovid';

const CountryDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.dataCovid);
  useEffect(() => {
    dispatch(loadDataCountries());
  }, []);

  const countryData = covidData.filter((data) => data.id === id);

  return (
    <>
    {covidData.length === 0 && (
      <h3 className="wait">Loading Covid Data...</h3>
      )}
    {covidData.length > 0 && (
      <>
      <h2 className="r-country">{countryData[0].country}</h2>
      <ul>
        <li>
          <span className="left">Total Confirmed:</span>
          <div className="right">{countryData[0].TotalConfirmed}</div>
        </li>
        <li>
          <span className="left">New Confirmed:</span>
          <div className="right">{countryData[0].NewConfirmed}</div>
        </li>
        <li>
          <span className="left">Total Recovered:</span>
          <div className="right">{countryData[0].TotalRecovered}</div>
        </li>
        <li>
          <span className="left">New Recovered:</span>
          <div className="right">{countryData[0].NewRecovered}</div>
        </li>
        <li>
          <span className="left">Total Deaths:</span>
          <div className="right">{countryData[0].TotalDeaths}</div>
        </li>
        <li>
          <span className="left">New Deaths:</span>
          <div className="right">{countryData[0].NewDeaths}</div>
        </li>
        <li>
          <span className="left">Date:</span>
          <div className="right">{countryData[0].Date}</div>
        </li>
      </ul>
      </>
    )
    }  
    </> 
  );
}

export default CountryDetails;