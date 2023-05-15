import React from 'react'

export default function Header() {

  const links=[
    {
      id:1,
      name:"Home"
    },
    {
      id:2,
      name:"Compétitions"
    },
    {
      id:3,
      name:"Vidéos"
    }
  ];
  return (
    <div className='flex justify-between p-4 items-center bg-white'>
      <div className='flex gap-8 items-center'>
        <img src={require('./../Assets/logo.jpg')} alt="" className="w-[35px] rounded-full"/>
        <ul className='flex gap-7 bold font-bold'>
          {links.map((link)=>(
          <li className='cursor-pointer hover:bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2' key={link.id}>{link.name}</li>
          ))}
        </ul>
      </div>
      <div>
      <img src={require('./../Assets/youtube.png')} alt="" className="w-[35px] rounded "/>
      </div>
    </div>
  )
}
