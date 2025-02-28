import React from 'react'
import Input from './../common/Input'
import Button from './../common/Button'

const CustomForm = () => {
  return (
    <form className='mt-10'>
        <div className='mb-2'>
            <p className='text-white text-md text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className='flex justify-center items-center space-x-2'>
            <Input />
            <Button color='red' size='lg' text='Get Started' leftLogo={true}/>
        </div>
    </form>
  )
}

export default CustomForm