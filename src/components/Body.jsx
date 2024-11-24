// import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useFoodApi from "../hooks/useFoodApi";

export default function Body({resData}) {

  return resData.length == 0 ? (
    <Shimmer />
  ) : (
    <div
      id="foodie-body"
      className="mx-auto py-3 flex flex-col items-start gap-3"
    >
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
    </div>
  );
}
