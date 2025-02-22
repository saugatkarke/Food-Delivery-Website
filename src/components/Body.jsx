import { useEffect } from "react";
import RestaurantCard, { withVegCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useFetchContext } from "../context/FetchContext";

export default function Body() {
  const {
    filteredRes: resData,
    resApiData,
    setFilteredRes,
  } = useFetchContext();
  useEffect(() => {
    setFilteredRes(resApiData);
  }, [resApiData]);
  const RestaurantVegCard = withVegCard(RestaurantCard);
  return resData?.length == 0 ? (
    <Shimmer />
  ) : (
    <div id="foodie-body" className="mx-auto p-3 grid items-start gap-3">
      <h2 className="text-left">Restaurants Near You</h2>
      <div
        id="res-container"
        className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-2"
      >
        {resData?.map((res) => {
          return res.info.veg ? (
            <RestaurantVegCard
              key={res.info.id}
              reName={res.info.name}
              reAddress={res.info.areaName}
              reRating={res.info.avgRatingString}
              rePrice={res.info.costForTwo}
              reDelTime={res.info.sla.slaString}
              reImage={res.info.cloudinaryImageId}
              reLinkId={res.info.id}
            />
          ) : (
            <RestaurantCard
              key={res.info.id}
              reName={res.info.name}
              reAddress={res.info.areaName}
              reRating={res.info.avgRatingString}
              rePrice={res.info.costForTwo}
              reDelTime={res.info.sla.slaString}
              reImage={res.info.cloudinaryImageId}
              reLinkId={res.info.id}
            />
          );
        })}
      </div>
    </div>
  );
}
