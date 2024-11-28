import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function useResMenu() {
  const [resMenuData, setResMenuData] = useState([]);
  const { resId } = useParams();

  const SWIGGY_API = `${
    import.meta.env.VITE_SWIGGY_MENU_URL
  }?page-type=REGULAR_MENU&complete-menu=true&lat=18.6744633&lng=73.7065161&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(`${SWIGGY_API}`);
    const jsonData = await data.json();
    setResMenuData(jsonData?.data?.cards[2]?.card?.card?.info);
  };
  return resMenuData;
}
