import React from 'react';
import {Link} from 'react-router-dom';

import './ButtonSignup.scss';

export const ButtonSignup = () => {
  return (
    <div>
      <Link to='/signup'>
        <button className='Signup'> 
          <span className='Signup__span'>Signup </span>
        </button>
      </Link>
    </div>
  );
}
