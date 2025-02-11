import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { SpinnerIcon, Star } from "../assets/icons/Icon";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [starCount, setStarCount] = useState(0);
  const [loading, setLoading] = useState();
  const [status, setStatus] = useState(null);
  const inputsRef = useRef({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    rating: 0,
    message: "",
  });

  const handleStarCount = (starNum) => {
    setStarCount(starNum);
    inputsRef.current["rating"] = starNum;
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    inputsRef.current[name] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        inputsRef.current,
        import.meta.env.VITE_PUBLIC_EMAIL
      )
      .then((message) => {
        setLoading(false);
        console.log(inputsRef.current);
        if (message.status == 200)
          return setStatus("🎉 Message Sent Successfully!!");
        setStatus("❌ Something wrong with the form!!");
      });
  };
  return (
    <form
      className="space-y-4 border bg-slate-100 rounded-lg p-6 my-2"
      onSubmit={handleSubmit}
    >
      <h2 className="text-left border-b-2 border-white py-1">Get in Touch</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="custom-label">First Name</label>
          <input
            onChange={handleInputs}
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="custom-label">Last Name</label>
          <input
            onChange={handleInputs}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="custom-label">Email Address</label>
        <input
          onChange={handleInputs}
          type="email"
          name="email"
          placeholder="Email Address"
          className="block sm:w-1/2 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="custom-label">Reason for Contacting</label>
        <select
          defaultValue="selectone"
          onChange={handleInputs}
          name="reason"
          className="sm:w-1/2 w-full block p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="selectone">Select one</option>
          <option value="hire">To Hire</option>
          <option value="feedback">Feedback</option>
          <option value="collaboration">Collaboration</option>
          <option value="collaboration">Others</option>
        </select>
      </div>

      <div>
        <label className="custom-label">Message</label>
        <textarea
          placeholder="Write your message here..."
          rows="4"
          onChange={handleInputs}
          name="message"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <label className="custom-label">Rate this Project</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <span
              key={star}
              name="rating"
              value={star}
              onClick={() => handleStarCount(star)}
            >
              <Star
                starFillColor={`${star <= starCount ? "#f7ff02" : "white"}`}
                startCss="cursor-pointer hover:scale-105"
              />
            </span>
          );
        })}
      </div>
      {status ? (
        <p className="text-right text-xl font-bold animate-fade-in-up">
          {status}
        </p>
      ) : (
        ""
      )}
      <button
        disabled={loading || status ? true : false}
        type="submit"
        className="block text-2xl w-full px-5 py-2 justify-self-start sm:w-1/4 sm:px-4 sm:py-4 disabled:bg-blue-300 bg-blue-500 sm:justify-self-end text-white rounded-full hover:bg-blue-600 transition"
      >
        {loading ? <SpinnerIcon /> : "Submit"}
      </button>
    </form>
  );
}
