import React from 'react'
import RightShift from '../assets/rightShift.svg?react'

const Button = ({color, size, text, leftLogo = false}) => {

    const buttonSize = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-5.5 py-2.5 text-2xl',
    }
    return(
        <button className={`outline-none bg-${color}-600 ${buttonSize[size]} inline-flex items-center font-extralight text-white rounded-sm hover:bg-red-700`}>
            {text}
            { leftLogo && <RightShift className='ml-2 fill-current size-4'/> }
         </button>
    )
}

export default Button