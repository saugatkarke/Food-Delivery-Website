import React from "react";
import Spinner from "../assets/widgets/Spinner";
import useResMenu from "../hooks/useResMenu";
import { RES_IMG } from "../utils/constant";

export default function RestaurantMenu() {
  const resMenu = useResMenu();

  return resMenu.length == 0 ? (
    <div className="bg-primary h-72 grid content-center max-w-7xl mx-auto my-2 rounded-lg">
      <Spinner />
    </div>
  ) : (
    <div className="relative  mx-auto max-w-7xl my-2 ">
      <div
        className="absolute bg-[position-y:10%] top-0 left-auto right-0 h-[100%] w-[30%] bg-no-repeat bg-cover rounded-e-lg"
        style={{
          backgroundImage: `url(${RES_IMG}/${resMenu.cloudinaryImageId})`,
        }}
      ></div>
      <div className="bg-primary min-h-72 px-16 py-8 grid grid-cols-3 content-center gap-1 rounded-lg">
        <div className="grid justify-items-start">
          <h1 className="text-white text-5xl text-left">{resMenu.name}</h1>
          <p className="text-white">
            {resMenu.cuisines?.map((cus, index) => {
              if (resMenu.cuisines.length - 1 != index) return cus + "," + " ";
              return cus;
            })}
          </p>
        </div>
        <div className="grid w-11/12 justify-items-center border-x-white border-x-2">
          <p className="text-white flex items-center flex-wrap justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              role="img"
            >
              <circle
                cx="8.00005"
                cy="7.99999"
                r="7.2"
                fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"
              ></circle>
              <path
                d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="StoreRating16_svg__paint0_linear_32982_71565"
                  x1="8.00005"
                  y1="0.799988"
                  x2="8.00005"
                  y2="15.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#21973B"></stop>
                  <stop offset="1" stopColor="#128540"></stop>
                </linearGradient>
              </defs>
              {"some"}
            </svg>
            {resMenu.avgRating}({resMenu.totalRatingsString}) ♦︎
          <span className="text-white"> {resMenu.areaName}</span>
          </p>
          <h2 className="text-white italic">{resMenu.costForTwoMessage}</h2>
        </div>
      </div>
    </div>
  );
}
