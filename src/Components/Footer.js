import React from 'react'

export default function Footer() {

  const texts= [
    {
      id:1,
      name:"&copy By JeyCodeur"
    },
    {
      id:2,
      name:"Tout droits réservés"
    }
  ]
  return (
    <div>
      <div className='flex justify-between bg-purple-50 p-6 '>
      <div className='flex gap-8 items'>
        <ul className='flex gap-7 bold font-bold'>
          {texts.map((text)=>(
          <li className='cursor-pointer' key={text.id}>{text.name}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}
