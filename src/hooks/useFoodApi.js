import { useEffect, useState } from "react";

export default function useFoodApi() {
  const [resData, setResApiData] = useState([]);
  // console.log(resData);
  const SWIGGY_API = `${
    import.meta.env.VITE_SWIGGY_URL
  }?lat=18.6744633&lng=73.7065161&collection=80440`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${SWIGGY_API}`);
    const jsonData = await data.json();
    // console.log(jsonData);
    setResApiData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return resData;
}
