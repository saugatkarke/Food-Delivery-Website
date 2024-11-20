import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default function Body() {
  const [resData, setResData] = useState([]);
  const SWIGGY_API = `${
    import.meta.env.VITE_SWIGGY_URL
  }?lat=18.6744633&lng=73.7065161&collection=80440`;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(`${SWIGGY_API}`);
    const jsonData = await data.json();
    setResData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return resData.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <h2>Restaurants Near You</h2>
      <div id="res-container" className="flex gap-3 flex-wrap">
        {resData.map((res) => {
          return (
            <RestaurantCard
              key={res.info.id}
              reName={res.info.name}
              reAddress={res.info.areaName}
              reRating={res.info.avgRatingString}
              rePrice={res.info.costForTwo}
              reDelTime={res.info.sla.slaString}
              reImage={res.info.cloudinaryImageId}
            />
          );
        })}
      </div>
    </>
  );
}
