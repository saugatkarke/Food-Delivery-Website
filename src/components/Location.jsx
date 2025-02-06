import React from "react";
import { CloseXicon } from "../assets/icons/Icon";
import { useState, useEffect } from "react";

export default function Location() {
  const [location, setLocation] = useState();
  const [userState, setUserState] = useState();
  const [userPostCode, setUserPostCode] = useState();
  const [userCountry, setUserCountry] = useState();
  const [showLocBox, setShowLocBox] = useState(false);
  const GEO_REQ_URL = `${import.meta.env.VITE_GEOAPIFY_URL}?apiKey=${
    import.meta.env.VITE_GEOAPIFY_API
  }`;
  let locBoxStyle =
    "absolute rd:hidden bg-tpGrey z-50 h-full w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 justify-center items-center";

  useEffect(() => {
    getCurrentLocation();
  }, []);
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetch(
            `${GEO_REQ_URL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
          )
            .then((response) => response.json())
            .then((result) => {
              setLocation(
                `${result?.results[0]?.address_line1}, ${result?.results[0]?.city}`
              );
              setUserState(result?.results[0]?.state_code);
              setUserPostCode(result?.results[0]?.postcode);
              setUserCountry(result?.results[0]?.country);
            })
            .catch((error) => console.log("error", error));
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const toggleLocationBox = () => {
    showLocBox ? setShowLocBox(false) : setShowLocBox(true);
  };

  return (
    <>
      <div className={`${showLocBox ? "flex" : "hidden"} ${locBoxStyle}`}>
        <div className="absolute flex justify-center items-center border-4 rounded-md bg-foodie-grad h-1/2 w-1/2 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50">
          <button
            className="absolute top-4 right-4"
            onClick={toggleLocationBox}
          >
            <CloseXicon />
          </button>
          <div className="flex justify-center items-center flex-col gap-1">
            <h2>
              {location ? "📍Your Current Address is" : "Searching for you..."}
            </h2>
            <p className="text-xl text-white font-bold">
              {location ? location : "Searching for you...."},
            </p>
            <div className="flex flex-row gap-2">
              <p className="text-xl text-white font-bold">{userState},</p>
              <p className="text-xl text-white font-bold">{userPostCode},</p>
              <p className="text-xl text-white font-bold">{userCountry}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={toggleLocationBox}
        className="relative flex cursor-pointer flex-nowrap gap-1 px-1"
      >
        <span className="rd:hidden block">
          <svg
            className="h-[24px] w-[24px] cursor-pointer"
            width="100%"
            height="100%"
            viewBox="0 0 16 17"
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1828 1.84246C13.7623 0.516285 15.0521 -0.146802 15.6759 0.448004C16.2997 1.04281 15.6986 2.36264 14.4965 5.00231L11.0318 12.6101C9.78188 15.3547 9.15692 16.727 8.28744 16.6338C7.41796 16.5407 7.09629 15.0596 6.45294 12.0973C6.29606 11.375 6.21761 11.0138 5.97533 10.7649C5.73305 10.5161 5.37563 10.4285 4.6608 10.2532L4.29783 10.1642C1.65419 9.51589 0.332363 9.19175 0.234059 8.35677C0.135754 7.52179 1.34615 6.89952 3.76695 5.65497L11.1828 1.84246Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </span>
        <span className="rd:block hidden">
          <svg
            className="h-[24px] w-[24px] cursor-pointer"
            width="100%"
            height="100%"
            viewBox="0 0 16 17"
            fill="#FF5200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1828 1.84246C13.7623 0.516285 15.0521 -0.146802 15.6759 0.448004C16.2997 1.04281 15.6986 2.36264 14.4965 5.00231L11.0318 12.6101C9.78188 15.3547 9.15692 16.727 8.28744 16.6338C7.41796 16.5407 7.09629 15.0596 6.45294 12.0973C6.29606 11.375 6.21761 11.0138 5.97533 10.7649C5.73305 10.5161 5.37563 10.4285 4.6608 10.2532L4.29783 10.1642C1.65419 9.51589 0.332363 9.19175 0.234059 8.35677C0.135754 7.52179 1.34615 6.89952 3.76695 5.65497L11.1828 1.84246Z"
              fill="#FF5200"
            ></path>
          </svg>
        </span>
        <span className="absolute animate-pulse-3 bg-primary top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rd:hidden p-5 border-2 border-primary rounded-full z-[-1]"></span>
        <p className="text-black font-medium text-m rd:block hidden">
          {location ? location : "Use Precise Location"}
        </p>
      </div>
    </>
  );
}
