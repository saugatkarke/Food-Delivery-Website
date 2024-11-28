import React from "react";

export default function About() {
  return (
    <div>
      <div className="bg-primary h-96 grid content-center">
        <h1 className="text-white text-6xl">About Us</h1>
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
        </div>
      </div>
      <div className="flex p-5 flex-col w-1/2">
        <h2>Why to choose React and Tailwind?</h2>
        <p>Glad you ask! Well, I have been developing the Web App for many years now. Started with wordpress where 
         things were in PHP, when I got into building frontend, from there I was introduced with the jquery and javascript.
         That starting wordpress site was for my uni projects where we as a team of four developed and managed for a client.
         
        </p>
        <h2>Why to Create a Clone a like?</h2>
        <p>Glad you ask! Well, I have been developing the Web App for many years now. Started with wordpress where 
         things were in PHP, when I got into building frontend there I was introduced with the jquery and javascript.
         That starting wordpress site was for my uni projects where we as a team of four developed and managed for a client.
         I lead the project whereas others contyributed to various aspect of the project.  
        </p>
      </div>
    </div>
  );
}
