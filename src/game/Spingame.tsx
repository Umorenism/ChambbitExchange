import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../component/footer/Footer";
// import { TbMessageCircleCancel } from "react-icons/tb";

export const Spingame = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <div className="fixed bg-black text-white w-full top-0 p-4 z-10 left-0 right-0">
        <div className="flex justify-between items-center">
          <FaArrowLeft />
          {/* <h1 className="text-2xl font-serif text-green-500"></h1>
          <TbMessageCircleCancel /> */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pt-16 text-white pb-16 overflow-y-auto p-4 min-h-screen">
        <div className="bg-gray-800 flex justify-center items-center rounded-md text-xl  font-semibold py-4 flex-col p-2">
          <div className="bg-slate-500 w-full py-1 p-4 rounded-full mb-4 text-center">
            <p className="text-sm">Invite Friend</p>
          </div>
          <h1 className=" font-serif text-xl">Your tickets</h1>
          <div className="flex gap-2 mt-4">
            <h1 className="text-3xl font-semibold">0</h1>
            <button className="bg-orange-500 p-1 text-sm rounded-md">
              game
            </button>
          </div>
          <div className="flex gap-2 mt-4 justify-between items-center w-[80%]">
            <button className="bg-slate-500 p-1 py-2 rounded-md w-full text-xl">
              0 TON
            </button>
            <button className="bg-slate-500 p-1 py-2  text-xl rounded-md w-full">
              0 CON
            </button>
          </div>
          <div className="flex gap-2 mt-4 justify-between items-center w-[80%]">
            <button className="bg-slate-900 p-1 py-2 rounded-xl w-full text-xl">
              <p>icon</p>
              <h1>ticket:</h1>
            </button>
            <button className="bg-slate-900 p-1 py-2  text-xl rounded-xl w-full">
              <p>icon</p>
              <h1>withdra</h1>
            </button>
            <button className="bg-slate-900 p-1 py-2  text-xl rounded-xl w-full">
              <p>icon</p>
              <h1>Gifts</h1>
            </button>
          </div>
        </div>

        <div className="bg-gray-800 flex justify-center items-center rounded-md text-xl  font-semibold py-4 flex-col mt-5 p-4">
          <div className="w-40 h-40 bg-black rounded-full"></div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 bg-pink-700 w-full left-0 right-0 p-4 z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};
