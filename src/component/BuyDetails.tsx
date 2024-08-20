import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { IoMdHeadset } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const BuyDetails = () => {
  const [loading, setLoading] = useState(false);

  const handleSellClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <Link to="/pp">
            <FaArrowLeft size={20} />
          </Link>
          <h1>Buy USDT</h1>
          <IoMdHeadset size={20} />
        </div>
        <hr className="mb-4" />
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4 pt-20">
        <div className="text-sm text-slate-300">
          <h1>price 1,598 NGN 36s</h1>
          <h2>Quantity 10USDT</h2>
          <p>
            Payment Method <span className="text-orange-600">|</span> Bank
            Transfer
          </p>
          <h2>Payment Duration 15Min(s)</h2>
        </div>
        <div className="mt-4 min-h-screen">
          <div className="bg-slate-700 rounded-md p-2">
            <div className="flex gap-2">
              <div>
                <h1>With Crypto</h1>
                <p className="w-24 bg-orange-600 h-1"></p>
              </div>
              <p>With Fiat</p>
            </div>
            <div className="mt-4">
              <div className="bg-slate-900 py-4 rounded-md flex gap-4 p-2 items-center">
                <input
                  type="text"
                  className="w-full h-full outline-none bg-transparent"
                  placeholder="Enter amount"
                />
                <h1 className="flex items-center justify-center gap-2">
                  USDT
                  <p className="text-orange-700 mb-1">|</p>
                  All
                </h1>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h1>I will receive</h1>
                    <p>Available</p>
                  </div>
                  <div>
                    <h1>--NGN</h1>
                    <p>0 USDT</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Link to="/payment">
                    <button
                      className={`w-full py-4 rounded-md ${
                        loading ? "bg-gray-500" : "bg-[#1DD55E]"
                      } text-white`}
                      onClick={handleSellClick}
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Buy"}
                    </button>
                  </Link>
                </div>
                <div className="mt-4">
                  <p className="text-slate-300">
                    Please wait for the ccounterparty to make payment.The tokens
                    ffor this sale will be transferred oout of your funding
                    Account.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-slate-700 rounded-md min-h-[500px] p-2">
            <div>
              <h1>Remarks</h1>
              <p className="mb-4">DON'T PAY KOBO</p>
              <p className="mb-4">NO THIRD PARTY</p>
            </div>
            <hr />
            <h1 className="mt-4 text-xl">Transaction Info</h1>
            <div className="flex justify-between mt-2">
              <h5 className="text-xl">Seller Nickname</h5>
              <div>
                <h2 className="flex items-center gap-1 text-xl">
                  HOTB
                  <BsStars className="text-orange-600" />
                  <FaArrowRight />
                </h2>
                <p>Online</p>
              </div>
            </div>
            <div className="bg-gray-950 mt-4 rounded-md py-4">
              <div className="flex justify-between p-2 items-center">
                <h1>Good Rating %</h1>
                <p>100%</p>
              </div>
              <div className="flex justify-between p-2 items-center">
                <h1>Completed Order(s) in 30 Days</h1>
                <p>180 Order(s)</p>
              </div>
              <div className="flex justify-between p-2 items-center">
                <h1>30-Days Order Completed Rate(%)</h1>
                <p>100%</p>
              </div>
              <div className="flex justify-between p-2 items-center">
                <h1>Avg.Release Time</h1>
                <p>1 Minutes(s)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyDetails;
