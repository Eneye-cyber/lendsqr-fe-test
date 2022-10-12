import React from 'react'
import './Login.scss'
import appLogo from '../assets/logo.svg'
import pablo from '../assets/pablo-sign-in.svg'
import FormComponent from '../components/FormComponent'

const Login = () => {
  return (
    <div className='login'>
        <div className='nav-bar'>
            <a href="https://reactjs.org" target="_blank">
            <img src={appLogo} className="logo" alt="Lendsqr logo" /> 
            </a>
        </div>

        <div className="login__container">
        <div className="col_6 left">
            <div className="login_img_container">
                <img src={pablo} className="img" alt="Lendsqr" /> 
            </div>
        </div>
        
        <div className='col_6 right'>

            <FormComponent />

        </div>
        </div>

    </div>
  )
}

export default Login