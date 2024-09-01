import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Log In"
      image = {loginImg}
      formType = "login"
      setIsLoggedIn = {setIsLoggedIn}
    />
  )
}

export default Login