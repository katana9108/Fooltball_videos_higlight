import React from 'react'

 function VideosCard({VideoItem}) {
  return (
    <div>
        <div className='hover:scale-110 transition-all duration-400 cursor-pointer'>
            <img src={VideoItem.thumbnail} alt="" className='rounded-lg'/>
            <h2 className='font-bold text-[15px] my-1
            bg-gradient-to-r from-violet-500 to-fuchsia-600  
            px-2 p-2 mb-3 hover:text-black rounded text-white'>{VideoItem.title}</h2>
            <div className="flex flex-column">

            <a className='font-bold text-[10px]  text-white bg-gradient-to-r from-violet-500 to-fuchsia-300  mr-2  rounded p-2 hover:text-black ' href={VideoItem.url}>Voir Plus</a>
            <a href={VideoItem.url}>
            <h4 className='font-bold text-[10px] text-white bg-gradient-to-r from-violet-500 to-fuchsia-300  rounded p-2 hover:text-black '>{VideoItem.date}</h4>
            </a>
            </div>
        </div>
    </div>
  )
}

export default VideosCard;