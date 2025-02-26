import React from 'react'
import RightShift from './../../assets/rightShift.svg?react'

const Button = ({color, size, text, leftLogo = false}) => {

    const buttonSize = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-5.5 py-2.5 text-2xl',
    }

    const buttonColor = {
        red: 'bg-red-600 hover:bg-red-700',
        gray: 'bg-gray-600 hover:bg-gray-700',
        white: 'bg-white hover:bg-gray-100',
    }
    
    return(
        <button type='button' className={`outline-none ${buttonColor[color]} ${buttonSize[size]} inline-flex items-center font-extralight text-white rounded-sm`}>
            {text}
            { leftLogo && <RightShift className='ml-2 fill-current size-4'/> }
        </button>
    )
}

export default Button