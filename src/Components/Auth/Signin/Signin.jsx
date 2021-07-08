import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Logo} from '../../Header/Logo/Logo';
import {SigninComponent} from './SigninComponent';

export const Signin = () => {

  const [stateUser, setStateUser] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignin, setIsSignin] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let res = localStorage.getItem('registration');
    setStateUser(JSON.parse(res) || []);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    if (isSignin) {
      history.push('/');
    }else {
      alert('wrong password or email');
    }
  }

  const checkUser = () => {
    stateUser.map((data) => {
      if (data.email === email && data.password === password) {
        setIsSignin(true);
      }else {
        setIsSignin(false);
      }
      return data;
    });
  }

  const getEmail = (email) => {
    setEmail(email);
  }
  
  const getPassword = (password) => {
    setPassword(password);
  }

  return (
    <div>
      <div className='Header'>
        <Logo/>
      </div>
      <div className='Form-container'>
          <SigninComponent 
            checkUser={checkUser}
            onSubmit={onSubmit}
            getEmail={getEmail}
            getPassword={getPassword}
          />
      </div>
    </div>
  );
}
