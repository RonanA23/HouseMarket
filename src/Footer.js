import React from 'react'
import {AiOutlineTag,AiOutlineHome} from 'react-icons/ai'
import {BsCompass,BsPerson} from 'react-icons/bs'
import {useNavigate,useLocation} from 'react-router-dom'

function Footer() {

    const navigate=useNavigate()
    const location=useLocation()

    
  return (

    <div className='flex bg-white h-16 p-6'>
        <ul className='w-[300px] flex justify-between mx-auto items-center p-4'>
          <li>
          <BsCompass onClick={()=>navigate('./')} size={30} className={location.pathname==='/'?'text-green-300 cursor-pointer':'text-gray-300 cursor-pointer'}/>
          <p className={location.pathname==='/profile'?'text-green-300 cursor-pointer':'text-white cursor-pointer'}>Explore</p>
          </li>
        <li>
        <AiOutlineTag onClick={()=>navigate('./offers')} size={30} className={location.pathname==='/offers'?'text-green-400 cursor-pointer':'text-gray-400 cursor-pointer'}/>
       <p className={location.pathname==='/offers'?'text-green-300 cursor-pointer':'text-white cursor-pointer'}>Offers</p>
        </li>
        <li>
        <BsPerson onClick={()=>navigate('/signin')} size={30} className={location.pathname==='/signin'?'text-green-500':'text-gray-400 cursor-pointer'}/>
        <p className={location.pathname==='/signin'?'text-green-300 cursor-pointer':'text-white cursor-pointer'}>Profile</p>
        </li>
        
        </ul>
   
    </div>
  )
}

export default Footer