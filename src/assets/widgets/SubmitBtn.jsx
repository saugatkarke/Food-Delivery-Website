import React from "react";

export default function SubmitBtn({ btnText }) {
  return (
    <button
      type="submit"
      className="text-white w-full rounded-full bg-primary hover:bg-gradientOrange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-4 py-2 dark:bg-primary dark:hover:bg-deepOrange dark:focus:ring-blue-800"
    >
      {btnText}
    </button>
  );
}
