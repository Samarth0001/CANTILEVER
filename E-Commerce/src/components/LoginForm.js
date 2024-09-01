import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {

    const [formData,setFormData] = useState({email:"" , password:"" })
    
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate()

    function clickHandler(){
        setShowPassword(!showPassword);
    }

    function changeHandler(event){
        const {name,value} = event.target;
        setFormData( (prev) => (
            {   
                ...prev,
                [name] : value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");

        console.log(formData)
        navigate("/dashboard")
    }

  return (
    <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'
    >
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-700 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type="email"
                id = 'email'
                name='email'
                onChange={changeHandler}
                value = {formData.email}
                placeholder='Enter Email Address'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-200'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-700 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type = { (showPassword) ? 'text' : 'password' }
                value={formData.password}
                id = 'password'
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-200'
            />

            <span onClick={clickHandler}
                className='absolute right-3 top-[38px] cursor-pointer'
            >
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            
            <Link to="#">
                <p className='text-right text-xs mt-1 text-blue-100'>
                    Forgot Password?
                </p>
            </Link>
        </label>

        <button
            className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
        >Sign In</button>

        <div>
            <p className='text-[0.875rem] text-richblack-700'>Don't have an Account? 
                <Link to="/signup">
                    <span className='text-right text-sm mt-1 text-blue-100'>  Sign Up First</span>
                </Link>
            </p>
        </div>
    </form>
  )
}

export default LoginForm