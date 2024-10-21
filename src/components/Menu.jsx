import React from 'react'
import MenuButton from './MenuButton';
import { Link } from 'react-router-dom'


function Menu() {
    const menuItems = [
        {
          title: "Let's Play Some",
          image: "/images/billiard.webp",
          href: "/select-player",
        },
       
        {
          title: "Add Player",
          image: "/images/player.png",
          href: "/add-player",
        },
      ];

     const addedMenuItems =[
      {
        title: "History",
        image: "/images/history.webp",
        href: "/history",
      },
      {
        title: "Podium",
        image: "/images/podium.png",
        href: "/podium",
      },
     ] 
  return (
    <div className='flex flex-col min-w-72 gap-5 mt-5'> 
    {
        menuItems.map((e, index)=>{
            return(
                <MenuButton key={index} title={e.title} href={e.href} image={e.image}/>
            )
        })
    }
    <div className='grid grid-cols-2 gap-3'>
    {
      addedMenuItems.map((item, index)=>(
        <Link to={item.href} key={index} className='shadow-xl rounded-lg bg-white flex justify-center items-center flex-col p-1'>
            <img src={item.image} className='w-20' alt="" />
            <h1 className='text-lg font-semibold'>{item.title}</h1>

        </Link>
      ))
    }
    </div>
    </div>
  )
}

export default Menu