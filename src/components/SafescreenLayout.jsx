import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

function SafescreenLayout({children, title, venue}) {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    if(!token){
      window.location='/login'
    }
  return (
    <>
    <nav>
        <div className='max-w-7xl mx-auto py-3 px-5 md:py-6 flex flex-row border-b border-gray-200 '>
            <Link onClick={()=>navigate(-1)}>
            <IoMdArrowRoundBack className='text-orange-500 text-2xl '/>
            </Link>
            <h1 className='mx-auto'>
                {title}
            </h1>
            
        </div>
    </nav>
    <main className='overflow-hidden bg-gray-100 h-screen'>
    <div className='max-w-80 mt-5 mx-auto overflow-hidden '>
    {children}
    </div>
    </main>
    </>
  )
}

export default SafescreenLayout