import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi';
import Players from '../Components/PlayVidoesComponents/Players';
import Recommended from '../Components/PlayVidoesComponents/Recommended';

export default function PlayVideos() {
    const {url}= useParams();
    const   [videoUrl, setVideoUrl]=useState([]);
    useEffect(() => {
        getVideoByUrl();
    }, []);

    const getVideoByUrl = async () =>{
        GlobalApi.getVideoByUrl(url).then(resp =>{
            const result= resp.data.map((res)=>(
                {
                    title: res.title,
                    url:res.url,
                    thumbnail:res.thumbnail,
                    competitions:res.competitions
                }
            ))
            console.log(result.map((resp)=>(
                console.log(resp.title)
            )))
            setVideoUrl(result);
        } );
       
    }
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 p-10'>
            <Players video={videoUrl}/>             
            <Recommended/>
        </div>
    </div>
  )
}
