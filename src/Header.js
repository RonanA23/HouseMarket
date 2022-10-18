import React from 'react'
import {BsHouseDoor} from 'react-icons/bs'

function Header() {
  return (
    <div className='bg-black h-14 flex items-center'>
      <BsHouseDoor className='text-white text-3xl ml-4'/>
        <p className='text-white text-2xl font-bold w-[200px] mx-auto'>House Market</p>
    </div>
  )
}

export default Header