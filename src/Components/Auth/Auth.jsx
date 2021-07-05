import React from 'react';
import {Input} from './InputAuth/Input';

import './Auth.scss';

export const Auth = () => {

  const loginHandler = () => {}

  const registerHandler = () => {}

  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='Auth-wrapper'>
      <div className='Auth-container'>
        <h1 className='Auth-container__title'>Авторизация</h1>
        <form className='Auth-container__form' onSubmit={submitHandler}>

          <Input label='Email' errorMessage='Error'/> 
          <Input label='Пароль'/> 

          <button type='success' onClick={loginHandler}>
            Войти
          </button>
          <button type='primary' onClick={registerHandler}>
            Зарегистрироваться
          </button>

        </form>
      </div>
    </div>
  );
}
