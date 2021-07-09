import React from 'react';

import './SignupComponent.scss';

export const SignupComponent = ({
  email,
  password,
  onSubmit,
  emailDirty,
  passwordDirty,
  emailError,
  passwordError,
  formValid,
  userName,
  emailHandler,
  passwordHandler,
  blurHandler,
  gettingChecked,
  gettingValidValueFromInput,
  gettingUserName
}) => {

  return (
    <form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <div className='registration-field'>

        <input
          onChange={(event) => gettingUserName(event.target.value)}
          value={userName}
          className='registration-field__input'
          name='name' type="text"
          placeholder='Enter your name....'/>

        {
          (emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>
        }

        <input
          onChange={(event) => emailHandler(event)}
          onBlur={(event) => blurHandler(event)}
          value={email}
          className='registration-field__input'
          name='email' type="text"
          placeholder='Enter your email....'/>
        {
          (passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>
        }
        <input
          onChange={(event) => passwordHandler(event)}
          onBlur={(event) => blurHandler(event)}
          value={password}
          className='registration-field__input'
          name='password' type="password"
          placeholder='Enter your password....'/>

        <div className='btn-submit'>
          <div>
            <input 
            type='checkbox'
            onClick={(event) => gettingChecked(event)}
            />
            <span> Remember me</span>
          </div>
            <button
              className='btn-submit__btn'
              onClick={() => gettingValidValueFromInput(email, password)}
              disabled={!formValid}
              type='submit'>
              Registration
            </button>

        </div>
      </div>
    </form>
  )
}
