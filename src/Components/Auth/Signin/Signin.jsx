import React from 'react';
import {Logo} from '../../Header/Logo/Logo';
import {SigninComponent} from './SigninComponent';

export const Signin = (props) => {

  return (
    <div>
      <div className='Header'>
        <Logo/>
      </div>
      <div className='Form-container'>
          <SigninComponent />
      </div>
    </div>
  );
}
