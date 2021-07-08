import React from 'react';

export const SigninComponent = () => {
  return (
    <form className='Form-container'>
      <h1>Signin</h1>
      <div className="signin-field">

        <input 
        className='registration-field__input' 
        name='email' 
        type="text" 
        placeholder='Enter your email....'/>

        <input 
        className='registration-field__input' 
        name='password' 
        type="text" 
        placeholder='Enter your password....'/>

        <div className='btn-submit'>
          <button>Signin </button>
        </div>

      </div>
    </form>
  );
}
