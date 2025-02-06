import React from "react";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  MobileCallIcon,
  ReactLogo,
  TailWindlogo,
  ViteLogo,
} from "../assets/icons/Icon";
import ContactForm from "./ContactForm";

export default function About() {
  return (
    <div>
      <div className="bg-primary h-96 grid content-center bg-about-cover bg-no-repeat bg-contain bg-left">
        <h1 className="text-white text-6xl">About App</h1>
        <h2 className="text-white italic">
          "A food ordering app inspired by Swiggy"
        </h2>
        <div className="grid justify-items-center my-2">
          <img
            className="rounded-full my-2"
            src="/src/assets/images/new pp.png"
            width="60"
            height="60"
          />
          <p className="text-white">Author: Saugat Karki</p>
          <div className="flex flex-row gap-4 items-center p-2">
            <GithubIcon />
            <LinkedinIcon />
            <EmailIcon />
            <MobileCallIcon />
          </div>
        </div>
      </div>
      <div className="flex p-5 flex-col mx-auto max-w-[1250px] gap-2">
        <div className="flex flex-wrap gap-4 mt-6">
          <h2 className="w-full text-4xl">
            What{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Tech Stack
            </span>{" "}
            is being Used?
          </h2>
          <p className="w-full">
            With a background in WordPress development, I've evolved my skills
            using a modern stack—Vite, React, and Tailwind CSS. This
            Swiggy-inspired food ordering app features Redux for state
            management, React Router DOM for navigation, robust cart
            functionality, and integrations with Swiggy's REST APIs, location
            services, and search capabilities, delivering a smooth and dynamic
            user experience.
          </p>
          <div className="lg:w-full lg:-ml-0 md:w-[1024px] w-[768px] snap-x lg:overflow-hidden overflow-x-scroll py-4 snap-mandatory flex gap-4 justify-between">
            <div className="h-full w-[90%] snap-center flex-shrink-0 relative shadow-lg bg-gradient-to-tl from-amber-50 via-green-50 to-indigo-100 lg:w-[32%] p-6 rounded-xl flex flex-col gap-2">
              <div className="absolute h-[10rem] top-0 opacity-10 left-0 w-full bg-right-top bg-vite-cover bg-contain bg-no-repeat bg-blend-screen"></div>
              <ViteLogo />
              <h3 className="text-2xl text-gray-700 text-left">Vite</h3>
              <ul className="text-left list-none p-0">
                <li>
                  <strong>Fast Setup and HMR: </strong>Instant development
                  experience with hot module replacement.
                </li>
                <li>
                  <strong>Flexible Integration:</strong> Works seamlessly with
                  React and other frameworks.
                </li>
                <li>
                  <strong>Optimized Builds: </strong> Efficient bundling for
                  production.
                </li>
                <li>
                  <strong>Modern Tooling: </strong> Leverages ES modules and
                  Rollup for smooth development.
                </li>
              </ul>
            </div>
            <div className="h-full w-[90%] snap-center flex-shrink-0 relative shadow-lg bg-gradient-to-tl from-sky-50 via-teal-50 to-sky-100 lg:w-[32%] p-6 rounded-xl flex flex-col gap-2">
              <div className="absolute h-[10rem] top-0 opacity-60 left-0 w-full bg-right-top bg-react-cover bg-contain bg-no-repeat bg-blend-screen"></div>
              <ReactLogo />
              <h3 className="text-2xl text-gray-700 text-left">React</h3>
              <ul className="text-left list-none p-0">
                <li>
                  <strong>Component-Based: </strong> Build reusable, modular UI
                  components.
                </li>
                <li>
                  <strong>Virtual DOM:</strong> Ensures high performance through
                  efficient updates.
                </li>
                <li>
                  <strong>Hooks and State Management: </strong> Simplifies
                  managing local and global state.
                </li>
                <li>
                  <strong>Rich Ecosystem:</strong> Extensive community libraries
                  and tools.
                </li>
              </ul>
            </div>
            <div className="h-full w-[90%] snap-center flex-shrink-0 relative shadow-lg bg-gradient-to-tl from-blue-50 via-fuchsia-50 overflow-hidden to-blue-50 lg:w-[32%] p-6 rounded-xl flex flex-col gap-2">
              <div className="absolute h-[10rem] top-0 opacity-10 left-0 w-full bg-right-top bg-tailwind-cover bg-contain bg-no-repeat bg-blend-screen"></div>
              <TailWindlogo />
              <h3 className="text-2xl text-gray-700 text-left">Tailwind CSS</h3>
              <ul className="text-left list-none p-0">
                <li>
                  <strong>Utility-First Approach: </strong> Rapidly build custom
                  designs with ready-to-use classes.
                </li>
                <li>
                  <strong>Highly Customizable:</strong> Configure design tokens
                  to match your brand.
                </li>
                <li>
                  <strong>Responsive by Design:</strong>Easily craft layouts for
                  all device sizes.
                </li>
                <li>
                  <strong>Efficient Styling:</strong> Minimize CSS bloat with
                  built-in purging of unused styles.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
