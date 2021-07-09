import React from 'react';
import {Link} from 'react-router-dom';

import './Favorite.scss';

export const Favorite = () => {
  return (
    <div>
      <Link to='/favorite'>
        <button className='Favorite'>
          <span className='Favorite__span'>Favorite</span>
        </button>
      </Link>
    </div>
  );
}
