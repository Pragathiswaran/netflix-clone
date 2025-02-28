import React from 'react'
import MoviePoster from '/pushpa2.jpg'

const Carousel = () => {
  return (
    <>
    <section className='w-full flex flex-col gap-y-6 mx-32'>
      <span className='text-white text-3xl font-semibold'>Trending</span>
     <div className='flex'>
      
       <div className='w-[82%] flex overflow-x-auto overflow-y-hidden flex-shrink-0 scrollbar-hide px-3 py-1 '>
       <button className='absolute text-white px-2 bg-gray-400'>{'<'}</button>
      {
        Array(10).fill(null).map((_,i) => (
          <div className='relative w-[190px] h-[257px] flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out mx-5 my-1'>
          <img src={MoviePoster} alt='Movie Poster' className='object-cover rounded-md w-full h-full'/>
          <div className='absolute -bottom-4 -left-7.5'>
            <span className='text-9xl text-black font-bold text-outline tracking-tighter'>{i + 1}</span>
          </div>
        </div>
        ))
      }
      </div>
       <button className='text-white '>{'>'}</button>
     </div>
      </section>
    </>
  )
}

export default Carousel