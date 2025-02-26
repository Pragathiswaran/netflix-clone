import React from 'react'

const Input = () => {
    
  return (
    <div className="w-[400px] h-14 bg-[#212121] opacity-85 rounded-sm px-4 pt-6 relative focus-within:border-2 focus-within:border-white">
        <input 
            type="text" 
            name="email" 
            id="email" 
            className="peer w-[350px] bg-transparent outline-none text-white border-gray-400 placeholder-transparent"
            placeholder="Email address"
        />
        <label 
            htmlFor="email" 
            className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 font-bold peer-focus:top-2 peer-focus:text-xs">
            Email address
        </label>
    </div>

  )
}

export default Input