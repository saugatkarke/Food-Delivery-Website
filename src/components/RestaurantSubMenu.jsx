import React from "react";
import { MENU_IMG } from "../utils/constant";
import VegIcon from "../assets/widgets/VegIcon";
import NonVegIcon from "../assets/widgets/NonVegIcon";
import { addItem } from "../utils/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function RestaurantSubMenu({ item, showNonVegItem }) {
  const dispatch = useDispatch();
  const handleAddCart = (item) => {
    console.log(dispatch(addItem(item)));
    return dispatch(addItem(item));
  };
  const vegTxt = "VEG";
  const { id, name, defaultPrice, price, imageId, description, itemAttribute } =
    item?.card?.info;
  return (
    <div
      key={crypto.randomUUID()}
      className="flex w-full my-4 p-4 bg-white rounded-lg"
    >
      <div className="flex flex-col items-start w-[80%]">
        <h4 className="flex gap-2">
          {name}
          <span>
            {itemAttribute?.vegClassifier == vegTxt ? (
              <VegIcon svgHeight={24} svgWidth={24} />
            ) : (
              <NonVegIcon svgHeight={24} svgWidth={24} />
            )}
          </span>
        </h4>
        <p className="text-start">
          ₹{defaultPrice / 100 ? defaultPrice / 100 : price / 100}
        </p>
        <p className="text-start">
          <span>{description}</span>
        </p>
        <button
          data-itemname={name}
          onClick={() => handleAddCart(item)}
          className="bg-primary text-white text-lg rounded-full px-4 py-1 my-2 hover:bg-deepOrange"
        >
          Add to Cart
        </button>
      </div>
      <div className="flex flex-col items-end w-[20%]">
        <img
          className="rounded-sm"
          src={MENU_IMG + "/" + imageId}
          alt={name + "image"}
          height={150}
          width={150}
        />
      </div>
    </div>
  );
}
