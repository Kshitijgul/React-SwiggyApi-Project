import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import reslist from "../utils/mockData";
import Restaurantcard from "./Restaurantcard.jsx";
import Shimmer from "./shimmer.jsx";

const Body = () => {
  // const [listOfRestaurant, setlistOfRestaurants] = useState(reslist);
  const [listOfRestaurant, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
    console.log("useEffect Called is done  ");
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("Body rendered ");

  // if (listOfRestaurant.length == 0) {
  //   return <Shimmer></Shimmer>;
  // }

  return listOfRestaurant.length == 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            name="search"
            placeholder="Enter the Restaurant Name"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredList = listOfRestaurant.filter(
                (res) =>
                  // res.info &&
                  // res.info.name &&
                  // searchText &&
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(
                "Filtered Restaurants:",
                filteredList.map((res) => res.info.name)
              );
              setlistOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button is Clicked ! ");
            const filteredList = reslist.filter(
              (res) => res.info.avgRating > 4
            );

            setlistOfRestaurants(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurantData, index) => (
          <Restaurantcard key={index} resData={restaurantData}></Restaurantcard>
        ))}
        {listOfRestaurant.length === 0 && (
          <p>No restaurants match the search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
