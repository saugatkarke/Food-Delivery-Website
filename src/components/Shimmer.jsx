import React from "react";

export default function Shimmer() {
  const numRes = 18;
  const shimmerComponents = [];

  for (let i = 0; i < numRes; i++) {
    shimmerComponents.push(
      <div
        key={i}
        className="border-2 shadow-inner rounded-md border-grey w-48 min-h-fit flex flex-wrap cursor-pointer"
      >
        <div className="relative w-full min-h-32 rounded-t-md bg-cover bg-slate-100 mb-1">
          <div className="absolute bottom-0 px-2 w-full flex items-end justify-between  rounded-t-md">
            <h3 className="text-white"></h3>
            <p className="text-white flex items-center"></p>
          </div>
        </div>
        <div className="px-2 grid justify-items-start gap-1">
          <p className="bg-slate-200 rounded-full text-slate-200">loading</p>
          <span className="bg-slate-200 rounded-full text-slate-200">
            ₹200 for two
          </span>
          <span className="bg-slate-200 rounded-full text-slate-200 mb-2">
            35-40 mins
          </span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        id="foodie-body"
        className="mx-auto py-3 flex flex-col items-start gap-3"
      >
        <h2>Restaurants Near You</h2>
        <div className="flex gap-3 flex-wrap">{shimmerComponents}</div>
      </div>
    </>
  );
}
