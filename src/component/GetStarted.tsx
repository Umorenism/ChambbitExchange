import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import pic from "../asset/TONCOIN 01.jpg";
import pic1 from "../asset/TONCOIN 011.jpg";
import pic2 from "../asset/TONCOIN PLAY GAMES.jpg";
import pic3 from "../asset/tradin (1).jpg";
import { MySlider } from "./MySlider";
import { GainItem } from "./GainItem";
import { useState } from "react";

// Settings for the slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000, // Adjust the speed as needed
};

type ButtonType = "login" | "signup";

export const GetStarted = () => {
  const [loading, setLoading] = useState<{ login: boolean; signup: boolean }>({
    login: false,
    signup: false,
  });

  const handleLoading = (type: ButtonType) => {
    setLoading((prev) => ({ ...prev, [type]: true }));

    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [type]: false }));
    }, 3000); // Duration of the loading state
  };
  console.log(loading);

  return (
    <div className="bg-gray-950 flex flex-col min-h-screen text-white overflow-hidden">
      <div className="mt-2 px-2 justify-between w-full text-black py-4 flex items-center"></div>
      <div className="mt-10 px-4 w-full">
        <div className="">
          {/* Slider for mobile screens */}
          <div className="md:hidden p-4">
            <Slider {...sliderSettings}>
              <div className="flex justify-center ">
                <img
                  src={pic}
                  alt="Slide 1"
                  className="w-full h-auto  max-w-xl object-cover"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={pic1}
                  alt="Slide 2"
                  className="w-full h-auto max-w-sm object-cover"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={pic2}
                  alt="Slide 3"
                  className="w-full h-auto max-w-xs object-cover"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={pic3}
                  alt="Slide 3"
                  className="w-full h-auto max-w-xs object-cover"
                />
              </div>
              {/* Add more slides if needed */}
            </Slider>
          </div>
        </div>

        <div className="flex gap-2 justify-center w-full">
          <Link to="/login" onClick={() => handleLoading("login")}>
            <button className="px-10 bg-gray-200 text-black py-3 rounded-md">
              {loading.login ? (
                <span className="loader">loading</span>
              ) : (
                "Login"
              )}
            </button>
          </Link>
          <Link to="/signup" onClick={() => handleLoading("signup")}>
            <button className="px-10 bg-gray-200 text-black py-3 rounded-md">
              {loading.signup ? (
                <span className="loader">Loadding</span>
              ) : (
                "Signup"
              )}
            </button>
          </Link>
        </div>
        <div className="mt-2 text-center">
          <MySlider />
        </div>
        <hr />
        <div className="mt-2">
          <GainItem />
        </div>
      </div>
    </div>
  );
};
