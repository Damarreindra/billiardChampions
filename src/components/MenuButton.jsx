import React from 'react'
import { Link } from 'react-router-dom'

function MenuButton({image, title, href}) {
  return (
    <Link to={href} className='flex items-center gap-3 bg-white rounded-xl min-h-24 w-full p-3 shadow-xl'>
         <img src={image} className='w-20' alt="" />
        <h1 className='text-xl font-semibold'>{title}</h1>
       
    </Link>
  )
}

export default MenuButton