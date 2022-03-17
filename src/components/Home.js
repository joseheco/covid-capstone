import React from "react";
import { useSelector } from "react-redux";
import CountryCard from './CountryCard'

const Home = () => {
  const myData = useSelector((state) => state.dataCovid)
  return(
    <div>
      <div className="head">
        <h1> Data Covid World</h1>
        <h2>Number affect</h2>
      </div>
      <div className="countries"> 
      {myData.map((data) =>(
        <CountryCard
          key={data.id}
          id={data.id}
          country={data.country}
        />
      ))
    }
      </div>
    </div>
  )
};

export default Home;
