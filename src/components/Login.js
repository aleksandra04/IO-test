import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.scss'
import '../styles/Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event) => {
    setEmailError(false)
    setEmail(event.target.value)
  }

  const checkErrorEmail = () => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!reg.test(email) && email.length > 0) {
      setEmailError(true)
    }
  }

  const handlePasswordChange = (event) => {
    setPasswordError(false)
    setPassword(event.target.value)
  }

  const checkErrorPassword = () => {

    if (password.length < 8 && password.length > 0) {
      setPasswordError(true)
    }
  }

  const emailClass = emailError
    ? 'form__input--error form__input'
    : 'form__input'

  const passwordClass = passwordError
    ? 'form__input--error form__input'
    : 'form__input'

  const hintEmailClass = emailError
    ? 'message message__visible'
    : 'message'

  const hintPasswordClass = passwordError
    ? 'message message__visible'
    : 'message'

  const linkTo = !emailError && !passwordError
    && email.length && password.length
    ? '/logged' : '/'

  return (
    <section className='logIn-container'>
      <h1 className='logIn-container__header'>
        Welcome back
      </h1>
      <p className='logIn-container__text'>
        Sign in to continue IO Technologies
      </p>
      <form className='form'>
        <div className='form__container-input'>
          <input
            type='email'
            placeholder='Your email'
            className={emailClass}
            onChange={handleEmailChange}
            value={email}
            onBlur={checkErrorEmail}
          >
          </input>
          {emailError && email.length > 0 && (
            <span className={hintEmailClass}>
              Oops! you entered an invalid email
            <span className='message__arrow'></span>
            </span>
          )}
        </div>

        <div className='form__container-input'>
          <input
            type='password'
            placeholder='Password'
            className={passwordClass}
            onChange={handlePasswordChange}
            onBlur={checkErrorPassword}
          >
          </input>
          <span className={hintPasswordClass}>
            Password should have at least 8 characters
            <span className='message__arrow'></span>
          </span>
        </div>

        <Link
          to={linkTo}
          className='button button--arrow'
          type='submit'

        >
          Log in
        </Link>
      </form>
      <div className='forgot-pwd'>
        <span className='logIn-container__text'>
          Forgot your password?
        </span>
        <Link
          to='/reset-pwd'
          className='forgot-pwd__link'
        >
          Reset
        </Link>
      </div>
    </section>
  )
}

export default Login
