import React from 'react';

import './Input.scss';

export const Input = (props) => {

  const inputType = props.type || 'text';
  const cls = ['Input'];
  const htmlFor = `${inputType}-${Math.random()}`

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor} className='Input-label'>
        {props.label}
      </label>

      <input
        className='Input-input'
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}/>

        <span className='Input-error'>{props.errorMessage}</span>
    </div>
  );
}
