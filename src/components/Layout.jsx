import React from "react";
import BackgroundImage from "../lottie/bg.png";
import { IoIosAdd, IoMdAddCircle, IoMdAddCircleOutline, IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div
      className="min-h-screen max-w-7xl mx-auto py-12 px-2 flex flex-col items-center overflow-hidden gap-6 relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      {children}
      <div className="p-3 rounded-full bg-white w-14 h-14 flex items-center justify-center mx-auto absolute bottom-5 z-50 border border-gray-200 shadow">
            <Link to="/select-player">
              <IoIosAdd className="text-4xl text-orange-500" />
            </Link>
          </div>
      <div className="absolute bg-orange-500 bottom-0 p-6 w-full">
      
      </div>
    </div>
  );
}

export default Layout;
