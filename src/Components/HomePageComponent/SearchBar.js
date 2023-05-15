import React from 'react';

export default function SearchBar() {
  
  const SearchBarButton = [
    {
      id:1,
      tag:"ReactJS"
    },
    {
      id:2,
      tag:"LARAVEL"
    },
    {
      id:3,
      tag:"PHP"
    },
    {
      id:4,
      tag:"JS"
    }
  ]
  return (
    <div className='bg-purple-50 flex flex-col text-center items-center'>
      <h2 className='font-extrabold text-transparent text-6xl  bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-full bg-clip-text'>Best Vidéos Football</h2>
      <div className='flex bg-red w-[400px] p-2 items-center rounded-md outline-none'>
        <input type="text" name="" id="" className=' w-[95%] p-2 rounded-full border-solid border-2 border-indigo-600'/>
        {/* <HiOutlineSearch className='h-50'/> */}
      </div>
      <h4 className=" font-bold text-[15px] text-violet-500  "> Meilleures vidés Football !</h4>
      <div className='gap-5 flex mt-4'>
        {SearchBarButton.map((items)=>(
          <div key={items.id} className='bg-gradient-to-r from-violet-500 to-fuchsia-500  px-2 p-2 mb-3 hover:text-black
          hover:scale-110 transition-all duration-400 ease-in-out hover:font-extrabold hover:bg-violet-600 hover:text-[14px]
           text-white text-[12px] font-bold rounded-md cursor-pointer'>
            {items.tag}
          </div>
        ))}
      </div>
    </div>

  )
}
