import React from 'react';
import './Search.scss';

export const Search = ({serachMovie}) => {

  const handlerOnSubmit = (e) => {
    e.preventDefault();
  }
  return ( 
  <> 
    <header className='Header'>
      <form onSubmit={handlerOnSubmit}>
        <input
          className='search'
          type="search"
          placeholder='Search...'
          onChange={(e) => serachMovie(e.target.value)}/>
      </form>
    </header> 
  </>
    )
}
