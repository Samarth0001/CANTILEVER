import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    let navigate = useNavigate()
    function clickHandler(){
        navigate('/cart')
    }

  return (
    <div className='w-full shadow-md fixed bg-white z-[100]'>
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
            <Link to="/">
                <p className='font-bold text-3xl font-mono'>Byte<span className='text-blue-500'>Mart</span></p>
            </Link>

            <nav>
                <ul className='flex gap-6 text-richblack-900'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
            <Link to="/cart" className="bg-richblack-900 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            onClick={clickHandler}
            >View Cart</Link>

                {
                    !isLoggedIn &&
                    <Link to="/login">
                        <button
                            className='bg-richblack-900 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                        >
                            Log In
                        </button>
                    </Link>
                    
                }

                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button
                            className='bg-richblack-900 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                        >Sign Up</button>
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out Successfully!");
                        }}
                            className='bg-richblack-900 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                        
                        >
                            Log Out
                        </button>
                    </Link>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar