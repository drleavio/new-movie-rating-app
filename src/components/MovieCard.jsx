import Link from 'next/link'
import React from 'react'

const MovieCard = ({title,image,id}) => {
    const poster_image=`https://image.tmdb.org/t/p/w500/${image}`
  return (
    <Link href={`/movie/${id}`}>
    <div className='border-2 border-gray-700 flex items-center p-3 flex-col rounded-lg'>
        <div style={{}}>
            <img style={{height:"300px",objectFit:"fill",aspectRatio:"4/3"}} src={poster_image} alt="" />
        </div>
        <div className='w-[100%] text-left md:text-center text-lg mt-2'>{title}</div>
    </div>
    </Link>
  )
}

export default MovieCard