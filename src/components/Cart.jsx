import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/slices/cartSlice";
import { CART_IMG, MENU_IMG } from "../utils/constant";
import { Link } from "react-router";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());

  const getTotal = (acc, curr) => {
    acc = acc + curr?.card?.info?.price;
    return acc;
  };
  console.log(cartItems.reduce(getTotal, 0));
  return (
    <>
      <div className="bg-primary h-52 mx-auto content-center">
        <h1 className="text-white">Your CART</h1>
      </div>
      {cartItems.length == 0 ? (
        <div className="mx-auto content-center">
          <img
            src={CART_IMG}
            height={400}
            width={300}
            className="mx-auto pb-4"
          />
          <p className="text-lg font-bold">Oops!! Your Cart is Empty</p>
          <Link to={"/"}>
            <button className="bg-primary text-white text-lg rounded-full px-4 py-1 my-2 hover:bg-deepOrange">
              See Restaurants
            </button>
          </Link>
        </div>
      ) : (
        <table
          key={crypto.randomUUID()}
          className="mx-auto min-w-[300px] max-w-[1200px] border border-collapse"
        >
          <thead>
            <tr className="text-left text-lg">
              <th>Items</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
            </tr>
          </thead>
          {cartItems.map((item) => {
            const { name, description, price, imageId } = item?.card?.info;
            return (
              <>
                <tr key={crypto.randomUUID()} className="bg-gray-50 text-left">
                  <td className="flex items-center gap-8">
                    <div className="w-3/4">
                      <strong>{name}</strong>
                      <br />
                      {description}
                    </div>
                    <div>
                      <img
                        className="rounded-sm"
                        src={MENU_IMG + "/" + imageId}
                        alt={name + "image"}
                        height={100}
                        width={100}
                      />
                    </div>
                  </td>
                  <td className="w-1/8 text-center font-bold">{"x1"}</td>
                  <td className="w-1/6 text-center font-bold">
                    ₹{price / 100}
                  </td>
                </tr>
              </>
            );
          })}
          <tr>
            <td className="w-1/8 text-lg font-bold text-left">Total</td>
            <td></td>
            <td className="w-1/6 text-lg text-center font-bold">
              ₹{cartItems.reduce(getTotal, 0) / 100}
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-left">
              <button
                onClick={handleClearCart}
                className="bg-dangerRed text-white text-lg rounded-full px-4 py-1 my-2 hover:bg-deepOrange hover:cursor-pointer"
              >
                Clear Cart
              </button>
            </td>
          </tr>
        </table>
      )}
    </>
  );
}
