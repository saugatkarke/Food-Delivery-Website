import React from "react";
import SubmitBtn from "../assets/widgets/SubmitBtn";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "../assets/icons/Icon";

export default function Contact() {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <div>
      <div className="bg-primary h-60 mx-auto flex flex-col justify-center gap-4">
        <h1 className="text-white">Contact Details</h1>
        <p className="text-white text-bold text-lg">
          Project Author: Saugat Karki |{" "}
          <a
            className="text-white text-bold no-underline"
            href="tel:+61410418821 "
          >
            📞 +61410418821
          </a>{" "}
          |
          <a
            className="text-white text-bold no-underline"
            href="mailto:saugatkarke@gmail.com "
          >
            {" "}
            ✉️ saugatkarke@gmail.com
          </a>
        </p>
        <div className="flex mx-auto items-center justify-center gap-4">
          <div
            onClick={() => {
              setShowIcon(true);
            }}
            className="relative flex justify-center items-center border border-white rounded-full w-[48px] h-[48px] content-center"
          >
            <span
              className={`${
                showIcon
                  ? "absolute inline-flex w-[36px] h-[36px] rounded-full bg-white opacity-75"
                  : "animate-ping absolute inline-flex w-[36px] h-[36px] rounded-full bg-white opacity-75"
              }`}
            ></span>
            <img
              className="rounded-full my-2 z-10"
              src="/src/assets/images/new pp.png"
              width="44"
              height="44"
            />
          </div>
          {!showIcon ? (
            ""
          ) : (
            <>
              <GithubIcon />
              <LinkedinIcon />
            </>
          )}
        </div>
      </div>
      <form className="mx-auto my-4 gap-4 flex justify-center max-w-screen-sm flex-wrap">
        <div className="flex gap-4">
          <label htmlFor="firstname">Firstname: </label>
          <input
            id="firstname"
            type="text"
            placeholder="Firstname"
            className="text-black block border border-black rounded-md p-1"
          />
          <label htmlFor="lastname">Lastname: </label>
          <input
            id="lastname"
            type="text"
            placeholder="Lastname"
            className="text-black block border border-black rounded-md p-1"
          />
        </div>
        <div className="flex gap-2 justify-start">
          <label htmlFor="Email">Email: </label>
          <input
            id="email"
            type="mail"
            placeholder="example@email.com"
            className="text-black block border border-black rounded-md p-1"
          />
        </div>
        <SubmitBtn btnText="Submit" />
      </form>
    </div>
  );
}
