import { FaBell, FaCircleUser } from "react-icons/fa6";
import { IoMdHeadset } from "react-icons/io";

import logo from "../../../asset/nlogo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");

  const handleopen = async () => {
    setOpen(!open);
    if (userToken) {
      navigate("/subHead");
    }
  };

  return (
    <div className="bg-gray-950 text-white shadow-lg fixed top-0 z-10 left-0 w-full h-[80px]">
      <div className="flex justify-between items-center mb-4 p-4">
        <div className="relative">
          <FaCircleUser size={25} onClick={handleopen} />
        </div>
        {open ? (
          <div className="absolute top-[60px] left-0 bg-white text-slate-800 py-4 p-2 flex flex-col m-2 rounded-lg min-w-[80%]">
            <Link to="/login" className="py-2 font-bold">
              Login
            </Link>
            <hr />
            <Link to="/signup" className="py-2 font-bold">
              Sign up
            </Link>
          </div>
        ) : null}
        <div>
          <img src={logo} alt="logo" className="h-10 w-40" />
        </div>

        <div className="flex gap-4 items-center ">
          <IoMdHeadset className="text-white" size={25} />
          <div className="relative">
            <p className="absolute h-5 w-5 rounded-full bg-red-600 text-sm">
              12
            </p>
            <FaBell size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};
