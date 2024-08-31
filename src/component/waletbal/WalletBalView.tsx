import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../footer/Footer";
import { useState } from "react";

export const WalletBalView = () => {
  const [wallet, setWallet] = useState(false);

  const openWallet = () => {
    setWallet(!wallet);
  };
  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <div className="fixed bg-black text-white w-full top-0 p-4 z-10 left-0 right-0">
        <div className="flex justify-between items-center">
          <FaArrowLeft />
          <h1>Asset Name</h1>
          <div></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pt-16 text-white pb-16 overflow-y-auto p-4 min-h-screen">
        <div className="bg-gray-800 flex justify-center items-center rounded-md text-md  font-semibold py-4 flex-col p-2">
          <div>
            <h5>Balance:</h5>
            <p>USDT:</p>
          </div>
        </div>

        <div className="bg-gray-800 flex justify-center items-center rounded-md text-md  font-semibold py-4 flex-col mt-5 p-4">
          <div className="flex gap-4">
            <button
              className="bg-slate-950 px-2 py-2 rounded-md"
              onClick={openWallet}
            >
              {wallet ? "loading" : "Deposite"}
            </button>
            <button className="bg-slate-950 px-2 py-2 rounded-md">
              Withdraw
            </button>
            <button className="bg-slate-950 px-4 py-2 rounded-md">Trade</button>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 bg-pink-700 w-full left-0 right-0 p-4 z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};
