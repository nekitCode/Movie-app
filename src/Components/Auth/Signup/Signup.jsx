import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Logo} from '../../Header/Logo/Logo';
import {SignupComponent} from './SignupComponent';

export const Signup = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('the field email cannot be empty');
  const [passwordError, setPasswordError] = useState('the field password cannot be empty');
  const [formValid, setFromValid] = useState(false);
  const [checked, setChecked] = useState(false);
  const [localStorageValue, setLocalStorageValue] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const registration = localStorage.getItem('registration');
    setLocalStorageValue(JSON.parse(registration) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('registration', JSON.stringify(localStorageValue));
  }, [localStorageValue]);

  useEffect(() => {
    if (emailError || passwordError || !checked) {
      setFromValid(false);
    }else {
      setFromValid(true);
    }
  }, [emailError, passwordError, checked]);

  const onSubmit = (event) => {
    event.preventDefault();
    history.push('/', userName);
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(String(event.target.value).toLowerCase())) {
        setEmailError('incorrect email');
      }else {
        setEmailError('');
      }
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
    let valueLength = event.target.value.length;

    if (valueLength < 5 || valueLength > 10) {
      setPasswordError('password must be longer than 3 or less 8 symbol');
      if (!event.target.valut) {
        setPasswordError('the field email cannot be empty');
      }
    }else {
      setPasswordError('');
    }
  }

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
    }
  }

  const gettingChecked = (checked) => {
      setChecked(checked.target.checked);
  }

  const gettingUserName = (name) => {
    setUserName(name);
  }

  const gettingValidValueFromInput = (email, password) => {
    if (email && password && checked) {
        setLocalStorageValue([
          ...localStorageValue, {
            id: Date.now(),
            name: userName,
            email: email,
            password:  password,
            checked: checked,
          }
        ]);
    }else {
      return false;
    }

    return {
      email,
      password,
      checked
    }
  }

  return (
  <>
    <div className="Header">
      <Logo />
    </div>
    <div className="Form-container">
      <SignupComponent
        email={email}
        password={password}
        emailDirty={emailDirty}
        passwordDirty={passwordDirty}
        emailError={emailError}
        passwordError={passwordError}
        formValid={formValid}
        userName={userName}
        onSubmit={onSubmit}
        emailHandler={emailHandler}
        passwordHandler={passwordHandler}
        blurHandler={blurHandler}
        gettingChecked={gettingChecked}
        gettingValidValueFromInput={gettingValidValueFromInput}
        gettingUserName={gettingUserName}
      />
    </div>
  </>);
}
