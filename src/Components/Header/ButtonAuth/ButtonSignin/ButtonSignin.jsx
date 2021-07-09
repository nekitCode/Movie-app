import React from 'react';
import {Link} from 'react-router-dom';

import './ButtonSignin.scss';

export const ButtonSignin = () => {
  return (
    <div>
      <Link to='/signin'>
        <button className='Signin'>
          <span className='Signin__span'>Signin</span>
        </button>
      </Link>
    </div>
  );
}
