"use client"
import AppBar from "@/components/AppBar";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  const [data,setData]=useState([]);
  const [search,setSearch]=useState("");
  const [searchData,setSearchData]=useState([]);
  const [sortArray,setSortArray]=useState("movie/now_playing")
  const fetchMovie=async()=>{
    try {
      const response=await axios.get(`https://api.themoviedb.org/3/${sortArray}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=""`)
      console.log(response.data.results);
      setData(response.data.results)
    } catch (error) {
      
    }
  }
  const fetchSearchMovie=async()=>{
    try {
      const response=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}`)
      console.log(response.data.results);
      setSearchData(response.data.results)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    fetchMovie()
  },[sortArray])
  useEffect(()=>{
    fetchSearchMovie()
    // console.log();
    
  },[search])
  return (
      <div>
        <AppBar setSearch={setSearch} setSortArray={setSortArray}/>
        <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        { search?searchData?.map((data,ind)=>{
          return <div key={ind} className="gap-2">
          <MovieCard  title={data.title} image={data.poster_path} id={data.id}/>
          </div>
        }):
          data.map((data,ind)=>{
            return <div key={ind} className="gap-2">
              <MovieCard  title={data.title} image={data.poster_path} id={data.id}/>
              </div>
          })
        }
        </div>
      </div>
  );
}
