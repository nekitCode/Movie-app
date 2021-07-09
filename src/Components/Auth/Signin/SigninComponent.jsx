import React from 'react';

import './SigninComponent.scss';

export const SigninComponent = ({
  checkUser, 
  onSubmit,
  getEmail,
  getPassword
}) => {
  return (
    <form
    onSubmit={(event) => onSubmit(event)} 
    className='Sing-form-container'>
      <h1>Signin</h1>
      <div className="signin-field">

        <input
        onChange={(event) => getEmail(event.target.value)} 
        className='signin-field__input' 
        name='email' 
        type="text" 
        placeholder='Enter your email....'/>

        <input 
        onChange={(event) => getPassword(event.target.value)}
        className='signin-field__input' 
        name='password' 
        type="password" 
        placeholder='Enter your password....'/>

        <div className='signin-btn-submit'>
          <button
          onClick={checkUser} 
          className='signin-btn-submit__btn'>
            Signin 
          </button>
        </div>

      </div>
    </form>
  );
}
