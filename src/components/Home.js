import React from "react";
import { useSelector } from "react-redux";
import CountryCard from './CountryCard'

const Home = () => {
  const myData = useSelector((state) => state.dataCovid)
  return(
    <div>
      <h1>ok</h1>
      {myData.map((data) =>(
        <CountryCard
          key={data.id}
          id={data.id}
          country={data.country}
        />
      ))
    }
    </div>
  )
};

export default Home;
