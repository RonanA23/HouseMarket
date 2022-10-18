import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {AiFillLock,AiFillEye, AiFillRightCircle, AiOutlineMail} from 'react-icons/ai'
import {getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {app} from '../firebase'
import {db} from '../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { Navigate } from 'react-router-dom'


function SignUp() {

  const [showPassword,setshowPassword]= useState(false)


  const passwordHandler=()=>{
    setshowPassword(!showPassword)
  }

  const [formData,setFormdata]=useState({
    name:'',
    email:'',
    password:''
  })

  const {name,email,password}=formData

  const onChange=(e)=>{
    setFormdata((prevState=>({
      ...prevState,
      [e.target.id]:e.target.value
    })))
  }

  const onSubmit = async(e)=>
  {
    e.preventDefault()
 
    try {
      const auth = getAuth(app)
      const userCredential = await createUserWithEmailAndPassword
      (auth, email, password)
      const user = userCredential.user
 
      updateProfile(auth.currentUser,{
        displayName: name 
      })
 
        //create record of user in database from user
  const formDataCopy={...formData}
  delete formDataCopy.password
  formDataCopy.timestamp=serverTimestamp
  console.log('form data',formDataCopy)
  console.log(db)
  await setDoc(doc(db,'users',user.uid),formDataCopy)
  alert('working2')
  Navigate('/')
 
    } catch (error) {
      console.log('crap')
      console.log('error',error);
    }

  }

  


  return (
    <div className='bg-gray-300 '>
      <h1 className='text-3xl font-bold flex justify-start'>Sign Up Here!</h1>
      <div className=' bg-gray-300 p-2  '>
      <form className='flex-row ' onSubmit={onSubmit}>
      <div  className='flex bg-white border-2 items-center  rounded-lg mt-8'>
          <BsPerson size={30} className='mr-2 text-gray-800 '/>
        <input 
         value={name}
         type='text' 
         id='name'
         placeholder='Name' 
         className='mt-2 w-[300px]' 
         onChange={(onChange)}/>
        </div>
        <div  className='flex bg-white border-2 items-center  rounded-lg mt-8'>
          <AiOutlineMail size={30} className='mr-2 text-gray-800 '/>
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
          <p className='font-bold text-3xl'>SIGN UP</p>
          <AiFillRightCircle onClick={onSubmit} size={50} className='text-green-700 cursor-pointer hover:text-green-600'/>
         </div>
        
      </form>
      </div>
     
    </div>
  )
}

export default SignUp