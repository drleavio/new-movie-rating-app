import Link from 'next/link'
import React from 'react'

const AppBar = ({setSearch,setSortArray}) => {
  return (
    <div style={{position:"sticky",top:"0",zIndex:"100",backgroundColor:"black"}} className='w-[100%] bg-grey-500 flex justify-between items-center p-3'>
        <Link href="/"><div><h1>MovieDB</h1></div></Link>
        <div className='flex items-center gap-2'>
        <select className='border-2 border-gray-700 focus:border-pink-600 rounded-md p-2' onChange={(e)=>setSortArray(e.target.value)}>
            <option value="movie/now_playing">Sort</option>
            <option value="movie/popular">Popular</option>
            <option value="movie/top_rated">top rated</option>
            <option value="movie/upcoming">upcoming</option>
        </select>
        <div className='border-2 border-gray-700 focus:border-pink-600 rounded-md'><input className='p-2' type="text" placeholder='search' onChange={(e)=>setSearch(e.target.value)}/></div>
        </div>
    </div>
  )
}

export default AppBar