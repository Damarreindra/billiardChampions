import React from "react";
import BackgroundImage from "../lottie/bg.png";
import { IoIosAdd, IoIosHome, IoIosLogOut, IoIosSettings, IoMdAddCircle, IoMdAddCircleOutline, IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHistory } from "react-icons/fa";


function Layout({ children }) {
  const token = localStorage.getItem("token")
  if(!token){
    window.location='/login'
  }

  const handleLogout=()=>{
    localStorage.removeItem('token')
    window.location='/login'
  }
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
      <div className="absolute bg-orange-500 bottom-0 flex py-3 px-10 justify-between w-full">
       
      <Link to="/history"> <FaHistory className="text-2xl font-thin text-white"/></Link>
       <IoIosLogOut
       onClick={handleLogout}
       className="text-2xl text-white"/>
       
      </div>
    </div>
  );
}

export default Layout;
