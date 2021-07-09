import React from 'react';
import './Search.scss';

export const Search = ({searchMovie}) => {

  const handlerOnSubmit = (e) => {
    e.preventDefault();
  }
  return ( 
  <> 
    <form onSubmit={handlerOnSubmit}>
      <input
        className='search'
        type="search"
        placeholder='Search...'
        onChange={(e) => searchMovie(e.target.value)}/>
    </form>
  </>
    )
}
