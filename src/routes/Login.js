import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import xymaimg from './xyma.png'

const Login = () => {

    const [Project, setProject] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();

    axios.defaults.withCredentials= true;

    const handleSubmit = async(e) =>
    {
      try {
        const response = await fetch('http://43.204.133.45:4000/sensor/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Project,Email, Password }),
        });
        const data = await response.json();
        if(data.token){
          const tokenRole = JSON.stringify({
            token:data.token,
            role:data.role
          });
          localStorage.setItem('token',tokenRole);
          console.log("result.data.redirectUrl",data.redirectUrl);
          // navigate(data.redirectUrl);
          window.location.href='/'
        }
        else{
          window.alert('Invalid Credentials!');
        }
    } catch (error) {
        console.error(error);
    }
 
    }

  return (
    <div className='flex h-screen items-center'>
    <div className='flex flex-col justify-center shadow-2xl mx-auto w-80 p-8 rounded-md bg-white'>
      <div className='flex justify-center'>
      <img className='h-16 w-32 mb-4 cursor-pointer hover:scale-110 duration-200' onClick={() => {window.open('https://www.xyma.in', '_blank');}} src={xymaimg} alt='/'/>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor='project' className='text-xl font-light'>Project</label>
        <input type='text' id='project' placeholder='Enter Project Name...' autoComplete='off' required className=' mb-4 mt-1 rounded-md p-1 w-full font-thin hover:font-normal duration-200 border border-black' onChange={(e)=> setProject(e.target.value)}/>
        <label htmlFor='email' className='text-xl font-light'>Email</label>
        <input type='email' id='email' placeholder='Enter Email...' autoComplete='off' required className=' mb-4 mt-1 rounded-md p-1 w-full font-thin hover:font-normal duration-200 border border-black' onChange={(e)=> setEmail(e.target.value)} />
        <label htmlFor='pass' className='text-xl font-light' >Password</label>
        <input type='password' id='pass' placeholder='Enter Password...' required className='mb-8 mt-1 rounded-md p-1 w-full font-thin hover:font-normal duration-200 border border-black' onChange={(e)=> setPassword(e.target.value)}/>
        <div className=' text-center mb-4 ' >
          <button  type='submit' className='rounded-md w-full p-1 bg-green-500 text-white hover:scale-105 duration-200'>Login</button>
        </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login