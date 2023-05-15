import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Services/GlobalApi';
import VideosCard from './VideosCard';
import { useNavigate } from 'react-router-dom';

export default function VideosList() {
  const [videos, setVideos]= useState([]);
  const navigate =useNavigate();
  useEffect(() => {
    GlobalApi.response.then((res)=>{
      const resultat= res.data.map((items)=>(
        {
          title: items.title,
          url:items.url,
          thumbnail:items.thumbnail,
          date:items.date,
          competitions:items.competitions
        }
        ));
        setVideos(resultat);
    })
  }, []);
  

  return (
    <div className="mt-4 px-4 md:px-8 lg:px-12 grid 
    grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 ">
      {
        videos.map((item)=>(
          
          <div onClick={()=>navigate('play-video/'+item.title)}>
            <VideosCard VideoItem={item} key={item.title.trim()}/>
          </div>
        ))
      }
    </div>
  )
}


