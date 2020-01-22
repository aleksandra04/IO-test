import React from 'react';
import '../styles/PasswordReset.scss';
import '../styles/Button.scss'
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  
  return (
    <div className='reset'>
      <div className='link-container'>
        <Link to='/' className='link-container__link'></Link>
      </div>
      <h1 className='reset__header'>
        Forgot password?
      </h1>
      <form
        className='reset__form'
        onSubmit='some function'
      >
        <input 
          className='reset__form_input'
          placeholder='Enter your email'
        >
        </input>
        <button className='button'>
          send me instructions
        </button>
      </form>
    </div>
  )
}

export default PasswordReset
