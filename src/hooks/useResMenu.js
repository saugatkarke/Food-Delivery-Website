import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TYPE_CATEGORY } from "../utils/constant";

export default function useResMenu() {
  const [resMenuData, setResMenuData] = useState([]);
  const [resCatMenu, setResCatMenu] = useState([]);
  const [resMenuHeader, setResMenuHeader] = useState([]);
  const [resMenuOffer, setresMenuOffer] = useState([]);
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
    setResMenuData(jsonData?.data?.cards);
    setResMenuHeader(jsonData?.data?.cards[2].card.card.info);
    setresMenuOffer(
      jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    setResCatMenu(
      (jsonData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards).filter(
        (mainMenu) => {
          if (mainMenu?.card?.card["@type"] == TYPE_CATEGORY)
            return mainMenu?.card?.card;
        }
      )
    );
  };
  return [resMenuData, resMenuHeader, resMenuOffer, resCatMenu];
}
