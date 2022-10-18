import React,{useState} from 'react'
import {BsPersonFill} from 'react-icons/bs'
import {AiFillLock,AiFillEye, AiFillRightCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SignIn() {
  const [showPassword,setshowPassword]=useState(false)


  const passwordHandler=()=>{
    setshowPassword(!showPassword)
  }

  const [data,setData]=useState({
    email:'',
    password:''
  })

  const {email,password}=data

  const onChange=(e)=>{
    setData((prevState=>({
      ...prevState,
      [e.target.id]:e.target.value
    })))
  }

  const onSubmit=()=>{
    console.log('data submitted',data)
  }

  return (
    <div className='bg-gray-300 '>
      <h1 className='text-3xl font-bold flex justify-start'>Welcome Back!</h1>
      <div className=' bg-gray-300 p-2  '>
      <form className='flex-row ' onSubmit={onSubmit}>
        <div  className='flex bg-white border-2 items-center  rounded-lg mt-8'>
          <BsPersonFill size={30} className='mr-2 text-gray-800 '/>
        <input 
         value={email}
         type='email' 
         id='email'
         placeholder='Email' 
         className='mt-2 w-[300px]' 
         onChange={(onChange)}/>
        </div>
       <div className='flex bg-white border-2 items-center rounded-lg justify-between mt-4'>
        <div className='flex'>
        <AiFillLock size={30} className='mr-2 text-gray-800'/>
       <input 
       value={password}
        type={showPassword?'password':'text'} 
        id='password'
        placeholder='Password' 
        className='mt-4 w-[300px]' 
        onChange={onChange}/>
        </div>
         <div>
         <AiFillEye size={30} onClick={passwordHandler}/>
         </div>
       </div>
         <p className='flex justify-end text-green-700 font-bold mt-8'>Forgot Password?</p>
         <div className='flex justify-between mt-16'>
          <p onClick={onSubmit} className='font-bold text-3xl'>SIGN IN</p>
          <AiFillRightCircle onClick={onSubmit} size={50} className='text-green-700 cursor-pointer hover:text-green-600'/>
         </div>
        <Link to='/signup' className='w-[300px] text-blue-600 font-bold h-12 mt-16 rounded-lg'>SIGN UP INSTEAD</Link>
      </form>
      </div>
     
    </div>
  )
}

export default SignIn