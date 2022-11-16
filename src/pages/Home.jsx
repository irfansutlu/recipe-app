import axios from "axios";
import React, { useState } from "react";
import Card from "../components/Card";

function Home() {
  const [searchBar, setSearchBar] = useState(null);
  const [meal, setMeal] = useState(null);
  const [srcData, setSrcData] = useState(null)
  const APP_ID = "82747930";
  const APP_KEY = "810a8991594ccdb0c181e01d13323d22";
  const url = `https://api.edamam.com/search?q=${searchBar}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getAPI = async () => {
    const { data } = await axios(url);
    setSrcData(data.hits)
  };

  return (
    <div className="home">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Recipe"
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
        />
        <select onChange={(e) => setMeal(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
        <button type="submit" onClick={()=>getAPI()}>Search</button>
      </div>
      <div className="card-div">
        {srcData?.map((item,index)=>(
          <Card item={item} key={index}/>
        ))}
      </div>
      
    </div>
  );
}

export default Home;
