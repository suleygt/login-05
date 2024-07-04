import React from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function Login () {
    return (

  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="form">
      <div className="flex-col items-center space-x-8">
        <div className="header text-white text-4xl font-bold">SHEY</div>
        <div className="alink absolute top-1/2 right-4 transform -translate-y-1/2 flex space-x-8">
        <a href="#home" className="text-lg">Home</a>
        <a href="#services" className="text-lg">Services</a>
        <a href="#contact" className="text-lg">Contact us</a>

        </div>
      </div>
      <div className="diagonal-section"></div>
      <div className='circle'></div>
      <div className="oval"></div>
      <div className="flex justify-center items-center h-[1160px]">
          <div className="w-[554px] h-[501px] bg-white shadow-lg p-8">
          <form className="center">
            <h1 className="text-3xl font-bold mb-8 text-center">LOGIN</h1>
            
              <div>
                <label htmlFor="username" className="block text-lg"></label>
                <input type="text" id="username"
                placeholder='Username'
                className="username" />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg"></label>
                <input type="password" id="password" 
                placeholder='Password'
                className="password" />
              </div>
              <button type="submit" className="loginbutton">Login</button>
              <div className="or">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-black-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="fagoogle">
              <FaGoogle className="w-8 h-8 text-red-500 cursor-pointer" />
              <FaFacebook className="w-8 h-8 text-blue-500 cursor-pointer" />
            </div>
            <p className="mt-6 text-center">
              Not yet registered? <a href="#signup" className="text-blue-500">Click here to sign up</a>
            </p>
            </form>
          </div>
         
        </div>
      </div>
    </div>
   
  );
}

    
    
  
  export default Login;