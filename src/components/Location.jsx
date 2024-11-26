import React from "react";
import { useState, useEffect } from "react";

export default function Location() {
  useEffect(() => {
    getCurrentLocation();
  }, []);
  const GEO_REQ_URL = `${import.meta.env.VITE_GEOAPIFY_URL}?apiKey=${
    import.meta.env.VITE_GEOAPIFY_API
  }`;
  const [location, setLocation] = useState();
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //   console.log(position.coords.latitude);
          //   console.log(position.coords.longitude);
          fetch(
            `${GEO_REQ_URL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
          )
            .then((response) => response.json())
            .then((result) => {
              setLocation(
                `${result?.results[0]?.address_line1}, ${result?.results[0]?.city}, ${result?.results[0]?.postcode}`
              );
              //   console.log(result);
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

  return (
    <div
      onClick={getCurrentLocation}
      className="flex cursor-pointer flex-nowrap border-l-2 border-lightgrey gap-1 px-1"
    >
      <svg
        className="h-[30px] w-[18px] cursor-pointer"
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
      <p className="text-black font-medium text-m">
        {location ? location : "Use Precise Location"}
      </p>
      {location ? (
        ""
      ) : (
        <svg
          className="rotate-90 h-[30px] w-[18px] cursor-pointer"
          width="100%"
          height="100%"
          viewBox="0 0 24 25"
          fill="#FF5200"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.37919 2.42544C5.81126 1.9229 6.56891 1.86578 7.07144 2.29786L17.6113 11.3599C17.6231 11.3701 17.6351 11.3804 17.6473 11.3908C17.8192 11.5384 18.0321 11.7211 18.1922 11.9037C18.3861 12.1246 18.644 12.499 18.644 13.0281C18.644 13.5572 18.3861 13.9316 18.1922 14.1526C18.0321 14.3351 17.8192 14.5178 17.6473 14.6654C17.6351 14.6759 17.6231 14.6862 17.6113 14.6963L7.16191 23.6808C6.65938 24.1129 5.90173 24.0557 5.46966 23.5532C5.03758 23.0507 5.09469 22.293 5.59722 21.861L15.8703 13.0281L5.50676 4.11769C5.00423 3.68562 4.94711 2.92797 5.37919 2.42544Z"
            fillOpacity="0.92"
          ></path>
        </svg>
      )}
    </div>
  );
}
