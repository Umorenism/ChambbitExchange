import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaThumbsUp, FaComment, FaEye } from "react-icons/fa";

const VideoCard: React.FC = () => {
  return (
    <div className="w-full mb-10  shadow-md ">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {/* Avatar, Name, and Date */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div>
            <h4 className="text-xl font-bold">John Doe</h4>
            <p className="text-xs text-black">January 5, 2025</p>
          </div>
        </div>
        {/* Three Dots Icon */}
        <BsThreeDots className="text-gray-600 cursor-pointer" size={20} />
      </div>

      {/* Video */}
      <div className="relative">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          controls
          playsInline
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Footer - Comments, Likes, Views */}
      <div className="flex px-4 py-6 text-gray-600">
        <div className="flex items-center space-x-1 mr-2">
          <FaThumbsUp size={16} />
          <span className="text-sm">0</span>
        </div>
        <div className="flex items-center space-x-1 mr-2">
          <FaComment size={16} />
          <span className="text-sm">0</span>
        </div>
        <div className="flex items-center space-x-1 mr-2">
          <FaEye size={16} />
          <span className="text-sm">0</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
