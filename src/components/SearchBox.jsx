import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function SearchBox({ resData, setFilteredRes }) {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setFilteredRes(resData);
  }, [resData]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFilteredRes(
      resData.filter((searchRes) =>
        searchRes.info.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  };
  return (
    <form className="w-[28%] mx-auto" onSubmit={handleFormSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for restaurants..."
          required
        />
        <button
          type="submit"
          className="text-white rounded-full absolute end-2.5 bottom-2.5 bg-primary hover:bg-gradientOrange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-primary dark:hover:bg-deepOrange dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
