import React from 'react';
import {Link} from "react-router-dom";

import './Logo.scss';
import logo_path_1 from '../../../assets/img/logo1-1.png';
import logo_path_2 from '../../../assets/img/logo1-3.png';

export const Logo = () => {
  return (
    <Link to="/">
      <div className="img-container">
        <img className='Logo' src={logo_path_1} alt="LOGO"/>
        <img className='Logo1' src={logo_path_2} alt="LOGO"/>
      </div>
    </Link>
  )
}