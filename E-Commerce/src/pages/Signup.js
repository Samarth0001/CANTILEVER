import React from 'react'
import singupImg from '../assets/signup.png'
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Sign Up"
      image = {singupImg}
      formType = "signup"
      setIsLoggedIn = {setIsLoggedIn}
    />
  )
}

export default Signup