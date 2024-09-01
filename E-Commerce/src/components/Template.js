import React from 'react'
import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = (props) => {

    let title = props.title;
    let image = props.image;
    let formType = props.formType;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between w-11/12 max-w-[1000px] py-12 mx-auto mt-16'>
        <div className='w-11/12 max-w-[450px] border-2 border-richblack-800 rounded-lg p-8'>
            <h1 className='text-richblack-700 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

            {
            (formType === "signup") ?  (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }
        </div>

        <div className='relative w-11/12 max-w-[450px] mt-4'>
            <img src={frame} alt="Pattern" width={558} height={504} loading='lazy'
                className=' '
            ></img>
            <img src={image} alt="Students" width={558} height={490} loading='lazy'
                className='absolute -top-4 right-4'
            ></img>
        </div>
    </div>
  )
}

export default Template