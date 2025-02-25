import React from 'react'
import Netflix from '../assets/logo.svg?react'
import Button from './Button'
import SelectLanguage from './SelectLanguage'

const Navbar = () => {
  return (
  <>
    <nav className='flex justify-between relative py-10'>
      <div className=''>
        <Netflix className='text-red-600 fill-current w-32'/>
      </div>
      <div className='flex space-x-4'>
        <SelectLanguage />
        <Button color='red' text='Sign Up' size='sm'/>
      </div>
    </nav>
  </>
  )
}

export default Navbar