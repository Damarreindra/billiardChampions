import React from 'react'
import MenuButton from './MenuButton';


function Menu() {
    const menuItems = [
        {
          title: "Let's Play Some",
          image: "/images/billiard.webp",
          href: "/select-player",
        },
        {
          title: "Games History",
          image: "/images/history.webp",
          href: "/history",
        },
        {
          title: "Add Player",
          image: "/images/player.png",
          href: "/add-player",
        },
      ];
  return (
    <div className='flex flex-col min-w-72 gap-5 mt-5'> 
    {
        menuItems.map((e)=>{
            return(
                <MenuButton title={e.title} href={e.href} image={e.image}/>
            )
        })
    }
    </div>
  )
}

export default Menu