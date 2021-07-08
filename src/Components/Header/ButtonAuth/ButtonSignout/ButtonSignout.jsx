import React from 'react';

import './ButtonSignout.scss';

export const ButtonSignout = ({signout}) => {
  return (
    <div>
      <form onSubmit={(event) => signout(event)}>
        <button className='Signout' >
            <span className='Signout__span'>Signout</span>
        </button>
      </form>
    </div>
  );
}
