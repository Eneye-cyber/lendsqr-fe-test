import React from 'react'
import './FormComponent.scss'
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="form__container">
        <h1 className="form__header text__secondary">Welcome!</h1>
        <p className="form__subheader">Enter details to login.</p>
        <form className='form' onSubmit={(e) => {
          e.preventDefault();
          navigate("/dashboard/users")
          
        }}>
          <div className='form__input__container'>
              <input type="text" placeholder="Email" className="form__input" />
          </div>

          <div className='form__input__container'>
              <input type="password" placeholder="Password" className="form__input" />
              <button className="btn btn__link">SHOW</button>
          </div>
          <button className="btn btn__link">FORGOT PASSWORD?</button>
          
          <button type='submit' className="btn btn__submit">LOG IN</button>

        </form>
      </div>
  )
}

export default FormComponent