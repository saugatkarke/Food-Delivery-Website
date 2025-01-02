import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TYPE_CATEGORY } from "../utils/constant";

export default function useResMenu() {
  const [resMenuData, setResMenuData] = useState([]);
  const [resCatMenu, setResCatMenu] = useState([]);
  const [resMenuHeader, setResMenuHeader] = useState([]);
  const [resMenuOffer, setResMenuOffer] = useState([]);
  const [resVegMenu, setResVegMenu] = useState([]);

  const nonVegTxt = "NONVEG";
  const vegTxt = "VEG";
  const { resId } = useParams();
  // console.log(resVegMenu);

  const SWIGGY_API = `${
    import.meta.env.VITE_SWIGGY_MENU_URL
  }?page-type=REGULAR_MENU&complete-menu=true&lat=18.6744633&lng=73.7065161&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(`${SWIGGY_API}`);
    const jsonData = await data.json();

    const getResCatMenu = () => {
      return (jsonData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards).filter(
        (mainMenu) => mainMenu?.card?.card["@type"] == TYPE_CATEGORY
      );
    };
    setResCatMenu(getResCatMenu());
    setResMenuData(jsonData?.data?.cards);
    setResMenuHeader(jsonData?.data?.cards[2].card.card.info);
    setResMenuOffer(
      jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    // console.log(
    //   jsonData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    // );

    setResVegMenu(() => {
      return getResCatMenu().reduce(
        (accCatMenu, currCatMenu) => {
          let filteredCatMenu = currCatMenu?.card?.card.itemCards.filter(
            (catItem) => catItem.card.info.itemAttribute.vegClassifier == vegTxt
          );
          // console.log(filteredCatMenu);
          accCatMenu.push(filteredCatMenu);
          return accCatMenu;
        },
        [{}]
      );
    });
  };
  return [resMenuData, resMenuHeader, resMenuOffer, resCatMenu];
}
