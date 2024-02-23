import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { ChangeTitle } from '../../utils/common';

import { login } from '../../utils/auth';


function AuthPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState();

  const navigate = useNavigate();


  useEffect(() => {
    const l1 = document.createElement('link');
    l1.rel = 'stylesheet';
    l1.href = 'css/login.css';
    const l2 = document.createElement('link');
    l1.rel = 'stylesheet';
    l2.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    document.head.appendChild(l1);
    document.head.appendChild(l2);
    ChangeTitle('Login');
  }, [])

  const handleAuth = async (e) => {
    e.preventDefault();
    if(password.length>6) {
      const responce = await login(id, password);
      if( responce.state ) {
        const id = responce.info.user.id;
        navigate(`/dashboard/${id}`);
      }
      else {
        alert('failed')
      }
    }
  }

  const handleChangeId = (e) => {
    setId(e.target.value);
  }

  const handleChangePasscode = (e) => {
    setPassword(e.target.value);
  };

  return (
  <div className="wrapper">
    <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input id="id" type="text" placeholder="Username" required value={id} onChange={(e)=>{handleChangeId(e)}} />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input id="password" type="password" placeholder="Password" required value={password} onChange={(e)=>{handleChangePasscode(e)}} />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      
      <button onClick={(e)=>{handleAuth(e)}} id="login" type="submit" className="btn">Login</button>
      
    </form>
  </div>
  )
}

export default AuthPage
