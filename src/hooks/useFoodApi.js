import { useEffect, useState } from "react";

export default function useFoodApi() {
  const [resData, setResApiData] = useState([]);
  const [isMobile, setIsMobile] = useState(true);
  const getIsMobileType = () => {
    setIsMobile(window.navigator.userAgent.includes("Mobile"));
  };
  const SWIGGY_API = `${
    import.meta.env.VITE_SWIGGY_URL
  }?lat=18.6744633&lng=73.7065161&collection=80440`;

  useEffect(() => {
    fetchData();
  }, [isMobile]);

  useEffect(() => {
    getIsMobileType();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${SWIGGY_API}`);
    const jsonData = await data.json();
    const desktopData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const mobileData =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResApiData(isMobile ? mobileData : desktopData);
  };
  return resData;
}
