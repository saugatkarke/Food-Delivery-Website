import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function CartIcon() {
  const iconHeight = 32;
  const iconWidth = 32;
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <Link to='/cart/'>
    <div className="relative">
      <img
        src="/src/assets/icons/cart icon.svg"
        alt="cart icon"
        height={iconHeight}
        width={iconWidth}
        />
      <span className="absolute text-white bg-red-600 p-[3%_20%] rounded-full -top-3 -right-3">
        {cartItems.length}
      </span>
    </div>
        </Link>
  );
}
