import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const [formData,setFormData] = useState({
        fname:"" , lname:"", email:"",password:"",confirmPassword:""
    })

    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [accountType,setAccountType] = useState("student");

    const navigate = useNavigate()


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
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match!");
            return
        }
        setIsLoggedIn(true);
        
        const finalData = {
            ...formData,
            accountType
        }
        console.log(finalData)

        toast.success("Account Created");
        navigate("/dashboard")
    }

  return (
    <div>
        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'
        >
        {/* first name and last name */}
            <div className='flex gap-x-4 mt-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-700 mb-1 leading-[1.375rem]'>
                        First Name<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        value={formData.fname}
                        id = 'fname'
                        name='fname'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-200'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-700 mb-1 leading-[1.375rem]'>
                        Last Name<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        value={formData.lname}
                        id = 'lname'
                        name='lname'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-200'
                    />
                </label>
            </div>

            {/* email */}
            <label>
                <p className='text-[0.875rem] text-richblack-700 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    id = 'email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-200'
                />
            </label>

            {/* create Password and confirm password */}
            <div className='flex gap-x-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-700 mb-1 leading-[1.375rem]'>
                       Create Password<sup className='text-pink-200'>*</sup>
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

                    <span onClick={()=>{ setShowPassword(!showPassword) }}
                        className='absolute right-3 top-[38px] cursor-pointer'    
                    >
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-700 mb-1 leading-[1.375rem]'>
                       Confirm Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type = { (showConfirmPassword) ? 'text' : 'password' }
                        value={formData.confirmPassword}
                        id = 'confirmPassword'
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-200'
                    />

                    <span onClick={()=>{ setShowConfirmPassword(!showConfirmPassword) }}
                        className='absolute right-3 top-[38px] cursor-pointer'    
                    >
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>

            <div>
                <p className='text-[0.875rem] text-richblack-700'>Already have an Account? 
                    <Link to="/login">
                        <span className='text-right text-sm mt-1 text-blue-100'>  Log In</span>
                    </Link>
                </p>
            </div>

        </form>
    </div>
  )
}

export default SignupForm