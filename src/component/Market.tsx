// Market.tsx
import { useState } from "react";
import { FaSpeakerDeck } from "react-icons/fa6";
import { Button } from "./Button";
import { GreenBtn } from "./GreenBtn";
import { useNavigate } from "react-router-dom";

export const Market = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto relative">
      <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col">
        <div className="flex justify-between items-center">
          <h1>Favorites</h1>
          <h1>Spot</h1>
          <h1>Data</h1>
        </div>
        <div className="bg-gray-800 flex items-center p-2 gap-2 mt-2 py-2 rounded-md">
          <FaSpeakerDeck className="text-orange-400" />
          <p>Chambit Dual Asset:Avail Now Supported!</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <h1>USDT</h1>
          <h1>USDC</h1>
          <h1>USDE</h1>
          <h1>EUR</h1>
          <h1>BRL</h1>
          <h1>BTC</h1>
        </div>
        <hr className="mt-2" />
        <div className="flex justify-between items-center mt-6 ">
          <button className="bg-gray-400 px-2  text-white text-sm gap-2">
            All
          </button>
          <button className="text-sm">New</button>
          <button className="text-sm">Trending</button>
          <button className="text-sm">0 Fees</button>
          <button className="text-sm">Adventure Zone</button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h1>Trading Pairs/Vol</h1>
          <h1>Price</h1>
          <h1>24H Change</h1>
        </div>
        <div className="min-h-screen mt-4">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <div>
                <Button />
              </div>
              <div>
                <GreenBtn onClick={handleLoad} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="border-t-transparent border-solid animate-spin border-[#1DD55E] border-4 rounded-full h-12 w-12"></div>
        </div>
      )}
    </div>
  );
};
