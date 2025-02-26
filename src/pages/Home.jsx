import React from 'react'
import Hero from '../components/section/Hero';
import Footer from '../components/layout/Footer';
import Carousel from '../components/common/Carousel';

const Home = () => {
  return (
    <>
        <div className='bg-black'>
            <Hero />
            <div className='py-60'>
                <Carousel />
            </div>
        </div>
    </>
  )
}

export default Home