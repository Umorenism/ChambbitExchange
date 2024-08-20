import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../component/footer/Footer";
import { TbMessageCircleCancel } from "react-icons/tb";
import { Link } from "react-router-dom";

export const KycResponse = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <div className="fixed bg-black text-white w-full top-0 p-4 z-10 left-0 right-0">
        <div className="flex justify-between items-center">
          <FaArrowLeft />
          <h1>BNB</h1>
          <TbMessageCircleCancel />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pt-16 pb-16 overflow-y-auto p-4 min-h-screen">
        <div className="bg-slate-800 rounded-md py-4 flex flex-col items-center text-white">
          <h2>Wallet Balance</h2>
          <h1 className="text-green-500 text-4xl font-bold">0.00000</h1>
          <p className="text-sm">$0.00</p>
        </div>
        <div className="bg-slate-800 rounded-md py-4 flex justify-between mt-4 items-center text-white gap-4 p-2">
          <div className="bg-green-600 w-1/2 py-2 text-center rounded-md">
            <Link to="/#">Transfer</Link>
          </div>
          <div className="bg-red-600 w-1/2 py-2 text-center rounded-md">
            <Link to="/#">Stake</Link>
          </div>
        </div>
        <div className="bg-slate-800 rounded-md mt-4 grid grid-cols-2 gap-4 p-4">
          <div className="bg-gray-600 py-3 rounded-md text-center text-white">
            Deposit
          </div>
          <div className="bg-gray-600 py-3 rounded-md text-center text-white">
            Withdraw
          </div>
          <div className="bg-gray-600 py-3 rounded-md text-center text-white">
            Trade
          </div>
          <div className="bg-gray-600 py-3 rounded-md text-center text-white">
            Swap
          </div>
        </div>
        <h1 className="text-white text-xl font-semibold py-4">Staking</h1>
        <div className="bg-gray-800 py-4 rounded-md p-4 flex items-center gap-2">
          <h1 className="h-10 w-10 rounded-full flex justify-center items-center bg-green-800 ">
            4
          </h1>
          <h1 className="text-white text-sm">
            Start earning BNB <br />
            <span className="text-slate-400">Stake tokens and earn...</span>
          </h1>
        </div>
        <h1 className="py-4 text-white">About BNB</h1>
        <div className="bg-gray-800 py-4 text-slate-400 rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h1>Token Name</h1>
            <p>BNB (BNB)</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h1>Network</h1>
            <p>BNB</p>
          </div>
          <div className="flex justify-between items-center">
            <h1>Price</h1>
            <p>$143.51</p>
          </div>
        </div>
        <h1 className="text-white py-4">Jul 15,2024</h1>
        <div className=" py-2 rounded-md  min-h-full ">
          <div className="bg-slate-900 text-slate-300 rounded-md py-4 flex justify-between items-center p-2">
            <div className="flex items-center gap-1">
              <h1 className="h-10 w-10 rounded-full bg-green-600 flex justify-center items-center">
                hh
              </h1>
              <h1 className="text-sm">
                Sent <br />
                To 61k..QGQYR
              </h1>
            </div>
            <div>
              <p className="text-sm text-red-600 font-semibold">-0.003319BNB</p>
            </div>
          </div>
          <div className="bg-slate-900 mt-2 text-slate-300 rounded-md py-4 flex justify-between items-center p-2">
            <div className="flex items-center gap-1">
              <h1 className="h-10 w-10 rounded-full bg-green-600 flex justify-center items-center">
                hh
              </h1>
              <h1 className="text-sm">
                Sent <br />
                To 61k..QGQYR
              </h1>
            </div>
            <div>
              <p className="text-sm text-red-600 font-semibold">-0.003319BNB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 bg-pink-700 w-full left-0 right-0 p-4 z-10">
        <Footer />
      </div>
    </div>
  );
};
