import logo from "../asset/nlogo.png";

import { useState } from "react";

import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FaArrowLeftLong, FaCheck } from "react-icons/fa6";
import { IoMdHeadset } from "react-icons/io";
import { Link } from "react-router-dom";

// Typing effect component
const TypingText = ({ text }: { text: string }) => {
  const characters = Array.from(text);
  return (
    <motion.p
      className="text-xs text-[#1DD55E] font-bold mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const PostAdd = () => {
  const [loading, setLoading] = useState(false);

  const handlePostAd = () => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
      // Handle post ad logic here
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <FaArrowLeftLong size={20} />
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          <IoMdHeadset size={20} />
        </div>
      </div>
      <div className="flex-1 p-4 pt-20">
        <div className="text-center">
          <h1 className="text-xl font-bold">Post an Advert</h1>
          <p className="text-sm text-gray-400">Set Type and Price (1/3)</p>

          <div className="flex py-3 mt-4 justify-center items-center">
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center"></div>
            <div className="h-1 w-[30%] bg-[#1DD55E]"></div>
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center">
              <FaCheck />
            </div>
            <div className="h-1 w-[30%] bg-[#1DD55E]"></div>
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center">
              3
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-gray-800 min-h-[400px] text-white rounded-md py-4 mt-5 px-4">
          <textarea
            name=""
            id=""
            placeholder="Terms will be displayed to the counterparty"
            className="w-full border text-sm border-blue-700 outline-none p-2 rounded-md mb-4 bg-gray-200"
          />
          <hr />
          <div className="mb-4">
            <h1 className="text-lg font-bold">Counterparty Conditions</h1>
            <TypingText text="Adding counterparty requirements will reduce the exposure of your Ad" />
            <div className="mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Completed KYC</span>
            </div>
            <div className="mt-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Registered 0 days(s) ago</span>
            </div>
            <div className="mt-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Holding more than 0.01 BTC</span>
            </div>
          </div>
          <hr />
          <div className="mb-4">
            <div className="mt-2">
              <input type="radio" className="mr-2" />
              <span className="text-sm">Online</span>
            </div>
            <div className="mt-2">
              <input type="radio" className="mr-2" />
              <span className="text-sm">
                Offline now. Publish manually later.
              </span>
            </div>
          </div>
          <hr />
          <div>
            <Link to="/sucessful">
              <button
                onClick={handlePostAd}
                className={`bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span>Loading...</span>
                    <svg
                      className="w-5 h-5 ml-2 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8l5-5-5-5v8a8 8 0 01-8 8z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  "Post Ad"
                )}
              </button>
            </Link>
            <Link to="/secondaddvert">
              <button className="bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center">
                Previous
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
