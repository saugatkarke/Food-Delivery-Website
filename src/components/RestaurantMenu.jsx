import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Spinner from "../assets/widgets/Spinner";
import useResMenu from "../hooks/useResMenu";
import { RES_IMG, OFFER_IMG } from "../utils/constant";
import RestaurantCatMenu from "./RestaurantCatMenu";

export default function RestaurantMenu() {
  const [restMenu, resMenuHeader, resMenuOffer, resCatMenu] = useResMenu();
  const [showIndex, setShowIndex] = useState(null);
  const [showNonVeg, setShowNonVeg] = useState(null);
  const [showVeg, setShowVeg] = useState(null);
  const scrollContRef = useRef();
  const cardWidthRef = useRef();
  const menuContRef = useRef();
  const nonVegTxt = "NONVEG";
  const vegTxt = "VEG";

  const scroll = (direction) => {
    let scrollAmount = cardWidthRef.current.scrollWidth;
    if (direction == "left") {
      scrollContRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else if (direction == "right") {
      scrollContRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  if (restMenu.length == 0)
    return (
      <div className="mx-auto max-w-7xl sm:my-2 sm:p-4">
        <div className="bg-primary my-3 h-72 grid content-center max-w-7xl mx-auto sm:rounded-lg">
          <Spinner />
        </div>
      </div>
    );

  return (
    <div className="mx-auto max-w-7xl sm:my-2 sm:p-4">
      <div className="relative">
        <div className="bg-primary min-h-72 px-3 py-6 sm:px-16 w-full  grid lg:grid-cols-3 content-center gap-1 sm:rounded-lg">
          <div className="grid sm:grid-cols-2 justify-items-start justify-center">
            <div className="self-center w-full">
              <h1 className="text-white sm:text-5xl sm:text-left animate-fade-in-up">
                {resMenuHeader.name}
              </h1>
              <p className="text-white animate-fade-in-up lg:text-center sm:text-left">
                {resMenuHeader.cuisines?.map((cus, index) => {
                  if (resMenuHeader.cuisines.length - 1 != index)
                    return cus + "," + " ";
                  return cus;
                })}
              </p>
              <strong>
                <p className="bg-white block justify-self-center sm:justify-self-start my-2 px-4 py-1 rounded-full animate-fade-in-up">
                  {resMenuHeader.sla.slaString}
                </p>
              </strong>
            </div>
            <div
              className="lg:absolute aspect-square justify-self-center sm:justify-self-end bg-[position-y:10%] top-0 lg:left-auto right-0 sm:h-[12rem] lg:h-[100%] h-[16rem] lg:w-[30%] sm:w-[70%] w-full bg-no-repeat bg-cover rounded-md lg:rounded-e-lg"
              style={{
                backgroundImage: `url(${RES_IMG}/${resMenuHeader.cloudinaryImageId})`,
              }}
            ></div>
          </div>
          <div className="grid lg:w-11/12 justify-items-center lg:border-x-white lg:border-t-0 lg:border-x-2">
            <p className="text-white py-1 flex items-center flex-wrap justify-center animate-fade-in-up">
              <svg
                width="24"
                height="24"
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
              {resMenuHeader.avgRating}({resMenuHeader.totalRatingsString})
              <span className="text-white">{resMenuHeader.areaName}</span>
            </p>
            <h2 className="text-white italic animate-pulse-3 duration-75">
              {resMenuHeader.costForTwoMessage}
            </h2>
            <h2 className="text-[#ffffff61] italic animate-pulse-3 duration-100">
              {resMenuHeader.costForTwoMessage}
            </h2>
            <h2 className="text-[#ffffff14] italic animate-pulse-3 duration-300">
              {resMenuHeader.costForTwoMessage}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex my-4 mx-3 relative flex-wrap gap-4 ">
        <strong>
          <p className="text-2xl">Deals of the Day</p>
        </strong>
        <div
          id="menu-offer-card"
          ref={scrollContRef}
          className="flex overflow-x-scroll w-full"
        >
          <div className="flex flex-nowrap gap-4">
            {resMenuOffer.map((offer) => {
              return (
                <div
                  ref={cardWidthRef}
                  key={offer.info.offerIds[0]}
                  className="w-[18rem] rounded-lg p-2 border border-dashed border-[#e4e1e1] flex items-center gap-2 overflow-hidden animate-fade-in"
                >
                  <img
                    src={`${OFFER_IMG}/${offer?.info?.offerLogo}`}
                    width={60}
                    height={60}
                  />{" "}
                  <div className="text-left">
                    <h3>{offer?.info?.header}</h3>
                    <span className="text-sm whitespace-nowrap text-ellipsis">
                      {offer?.info?.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute right-0">
          <button
            id="prevBtn"
            onClick={() => {
              scroll("right");
            }}
            className="mx-2"
          >
            <div className="bg-[#dfdfdf] ease-linear transition-all border-2 rounded-full p-2 hover:bg-white hover:border-2 hover:border-[#e0e0e0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="rotate-[-90deg]"
              >
                <path
                  d="M8.81 3.38a.75.75 0 0 0-1.06 0L4.19 6.94a.75.75 0 1 0 1.06 1.06L7.5 6.06v6.19a.75.75 0 0 0 1.5 0V6.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.81 3.38z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
          <button
            id="nextBtn"
            onClick={() => {
              scroll("left");
            }}
          >
            <div className="bg-[#dfdfdf] ease-linear transition-all border-2 rounded-full p-2 hover:bg-white hover:border-2 hover:border-[#e0e0e0]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="rotate-90"
              >
                <path
                  d="M8.81 3.38a.75.75 0 0 0-1.06 0L4.19 6.94a.75.75 0 1 0 1.06 1.06L7.5 6.06v6.19a.75.75 0 0 0 1.5 0V6.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.81 3.38z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="my-12 bg-gray-50 p-4 sm:p-8 rounded-lg bg-food-cover bg-repeat-x bg-15% bg-blend-color-burn">
        <h2 className="pb-8">Menu</h2>
        {/* <label htmlFor={nonVegTxt}>
          NonVeg
          <input
            id={nonVegTxt}
            type="checkbox"
            onChange={(e) => {
              setShowNonVeg(true);
            }}
          />
        </label>
        <label htmlFor={vegTxt}>
          Veg
          <input
            id={vegTxt}
            type="checkbox"
            onChange={(e) => {
              setShowVeg(true);
            }}
          />
        </label> */}
        <div
          ref={menuContRef}
          className="max-w-[1090px] w-full mx-auto flex flex-col items-start"
        >
          {resCatMenu?.map((catMenu, index) => {
            return (
              <RestaurantCatMenu
                key={crypto.randomUUID()}
                resCatMenu={catMenu?.card?.card}
                showItem={index == showIndex ? true : false}
                showVegItem={showVeg}
                showNonVegItem={showNonVeg}
                setShowIndex={() => {
                  setShowIndex(index);
                }}
                setHideIndex={() => {
                  setShowIndex(null);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
