import React from 'react'
import { Hero } from '../components/section';
import { Footer } from '../components/layout';
import { Carousel } from '../components/common';

const Home = () => {
  return (
    <>
        <div className='bg-black overflow-hidden'>
            <Hero />
            <div className='my-20'>
                <Carousel />
            </div>
        </div>
    </>
  )
}

export default Home