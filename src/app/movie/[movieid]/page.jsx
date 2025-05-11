"use client"
import AppBar from '@/components/AppBar';
import SlideUpBox from '@/components/MotionDiv';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const {movieid}=useParams();
    const [data,setData]=useState({})
    const [image,setImage]=useState("");
    function convertMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours} hour(s) and ${minutes} minute(s)`;
      }
      
      
    const fetchDetails=async()=>{
        const response=await axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
        console.log(response.data);
        setData(response.data);
        setImage(response.data.poster_path);
    }
   
    useEffect(()=>{
        fetchDetails()
        
        console.log(data);
        
    },[movieid])
 const poster_image=`https://image.tmdb.org/t/p/w500/${image}`
  return (
    <>
    <AppBar/>
    <SlideUpBox>
    <div style={{overflowY:"hidden"}} className='mt-6 flex-column md:flex items-center justify-center p-4'>
        <div>
            <img className='h-[300px] w-[100%] md:h-[500px]' style={{aspectRatio:"4/3"}}  src={poster_image} alt="" />
        </div>
        <div className='p-3'>
            <div>{data.adult ? "adult rated":""}</div>
            <h1 className="text-4xl font-bold my-3 text-centre lg:text-left">{data.title}</h1>
            <p className="my-4 text-justify ">{data.overview}</p>
            <div>
                {
                    data.genres?.map((obj)=>{
                        return <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={obj.id}>{obj.name}</span>
                    })
                }
            </div>
            <div className='flex gap-2 mt-3 items-center'>Languages: {data.spoken_languages?.map((lang,ind)=>{
                return <div className='flex' key={ind}>
                    <div className='mr-2 border border-gray-200 rounded dark:border-gray-600 p-2'>{lang.english_name}</div>
                </div>
            })}</div>
            <div className='mt-2'>Total Revenue: {data.revenue}</div>
            <div className='mt-2'>Duration: {convertMinutes(data.runtime)}</div>
            <div className='mt-2'>release date: {data.release_date}</div>
        </div>
        
    </div>
    </SlideUpBox>
    </>
  )
}

export default page