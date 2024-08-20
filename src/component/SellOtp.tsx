const OtpCard = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-center">
        <span className="text-green-700">G</span>
        <span className="text-red-600">O</span>
        <span className="text-orange-600">O</span>
        <span className="text-blue-600">G</span>
        <span className="text-green-950">L</span>
        <span className="text-red-600">E</span> Authentication
      </h2>
      <p className="text-center py-2">Enter your OTP</p>
      <div className="py-4 flex border justify-around items-center p-2 rounded-md border-slate-900">
        <div className="">
          <input
            type="text"
            className="w-20 border outline-none py-2 text-center border-slate-900 text-xl"
          />
        </div>
        <div>
          <input
            type="text"
            className="w-20 border outline-none py-2 text-center border-slate-900 text-xl"
          />
        </div>
        <div>
          <input
            type="text"
            className="w-20 border outline-none py-2 text-center border-slate-900 text-xl"
          />
        </div>
        <div>
          <input
            type="text"
            className="w-20 border outline-none py-2 text-center border-slate-900 text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OtpCard;
