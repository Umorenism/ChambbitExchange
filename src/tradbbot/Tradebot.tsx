import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../component/footer/Footer";
import { TbMessageCircleCancel } from "react-icons/tb";

export const Tradebot = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <div className="fixed bg-black text-white w-full top-0 p-4 z-10 left-0 right-0">
        <div className="flex justify-between items-center">
          <FaArrowLeft />
          <h1>Trade Bot</h1>
          <TbMessageCircleCancel />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pt-16 text-white pb-16 overflow-y-auto p-4 min-h-screen">
        <div className="bg-gray-200 flex justify-between items-center  rounded-full  text-xl font-semibold">
          <div className="bg-green-500 h-full py-2 m-1 px-10 rounded-full  ">
            Buy
          </div>
          <button className="mr-2 text-red-600 text-2xl font-semibold">
            {" "}
            sell
          </button>
        </div>

        <div className="flex mt-2 justify-between">
          <div className="w-full">
            <h1 className="text-slate-200 py-2">Select Pairs</h1>
            <select
              name=""
              id=""
              className="bg-transparent w-full border rounded-md text-white py-3"
            >
              <option value="" selected className="bg-gray-600 text-white">
                USDT
              </option>
              <option value="" selected className="bg-gray-600 text-white">
                BNB
              </option>
              <option value="" selected className="bg-gray-600 text-white">
                CHAMB
              </option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <h1 className="text-slate-200 text-2xl font-semibold py-2">
                Base Price
              </h1>
              <input
                type="text"
                placeholder="search for price here..."
                className="w-full py-1 rounded-md bg-transparent border focus:border-green-500 placeholder:p-2"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <h1 className="text-slate-200 text-2xl font-semibold py-1">
                Price
              </h1>
              <input
                type="number"
                placeholder="enter your price here"
                className="w-full py-1 p-2 rounded-md bg-transparent border focus:border-green-500 placeholder:p-0"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <h1 className="text-slate-200 text-2xl font-semibold py-1">
                Numbers of Trades
              </h1>
              <input
                type="number"
                placeholder="enter your price here"
                className="w-full p-2 py-1 rounded-md bg-transparent border focus:border-green-500 placeholder:p-0"
              />
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="w-full">
              <button className="bg-green-700 w-full mt-2 py-3 rounded-lg font-bold hover:bg-red-800 hover:text-green-500">
                Excute Trade
              </button>
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
