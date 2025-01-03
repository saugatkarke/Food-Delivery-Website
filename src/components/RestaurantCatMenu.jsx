import React from "react";
import RestaurantSubMenu from "./RestaurantSubMenu";

export default function RestaurantCatMenu({
  resCatMenu,
  showItem,
  showVegItem,
  showNonVegItem,
  setShowIndex,
  setHideIndex,
}) {
  const { title, itemCards } = resCatMenu;
  const vegTxt = "VEG";
  const toggleSubMenu = (filterTxt) => {
    return itemCards.filter(
      (itemCard) =>
        itemCard?.card?.info?.itemAttribute?.vegClassifier == filterTxt
    );
  };

  return (
    <div
      key={crypto.randomUUID()}
      className="w-full mx-auto flex flex-col items-start"
    >
      <button
        onClick={() => {
          if (!showItem) return setShowIndex();
          setHideIndex();
        }}
        data-btn={title}
        className="inline-flex w-full justify-between items-center  border-grey border-b-2"
      >
        <h3 className="py-4">
          {title} ({itemCards.length})
        </h3>
        <span
          className={`transition-all ${showItem ? "rotate-180" : "rotate-0"}`}
        >
          ▼
        </span>
      </button>
      <div key={crypto.randomUUID()} data-cat={title} className="w-full">
        {showItem &&
          (showVegItem
            ? toggleSubMenu(vegTxt).map((itemCard) => (
                <RestaurantSubMenu key={crypto.randomUUID()} item={itemCard} />
              ))
            : itemCards.map((itemCard) => {
                return (
                  <RestaurantSubMenu
                    key={crypto.randomUUID()}
                    item={itemCard}
                  />
                );
              }))}
      </div>
    </div>
  );
}
