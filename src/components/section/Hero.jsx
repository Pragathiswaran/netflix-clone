import React from 'react'
import {Navbar} from '../layout'
// import './../../styles/index.css'
import {CustomForm} from './../forms'

const Hero = () => {
  return (
    <>
     <main className='hero px-32'>
        <Navbar />
        <div className='w-[550px] text-center mx-auto mt-20 text-sm leading-8'>
            <h1 className=' text-6xl text-white text-center font-bold'>Unlimited movies, TV shows, and more.</h1>
            <p className='text-white text-lg font-semibold mt-2'>Starts at ₹149. Cancel at any time.</p>`
        </div>
        <CustomForm />
     </main>
    </>
  )
}

export default Hero