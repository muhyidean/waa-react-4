import React, { useRef } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { authActions } from '../../store/index';



const Login = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useRef();


  const doLogin = createAsyncThunk('login',
    async (userCredentials) => {
      const res = await axios.post('http://localhost:8080/api/v1/authenticate', userCredentials);
      return res.data;
    });
  // THIS WILL NOT WORK
  // const doLogin = async (userCredentials) => {
  //   const res = await axios.post('http://localhost:8080/api/v1/authenticate', userCredentials);
  //   return res.data;
  // };


  const loginHandler = async (e) => {
    e.preventDefault();
    const form = formData.current
    const userCredentials = { email: form['user'].value, password: form['password'].value };
    const result = await dispatch(doLogin(userCredentials));
    dispatch(authActions.loginSuccessful());
    Cookies.set('user', result.payload.accessToken);
    // add to default headers 
    navigate('/user');
  };

  return (
    <main className="auth">
      <section>
        <form ref={formData} onSubmit={loginHandler}>
          <div >
            <label htmlFor='user'>User</label>
            <input type='text' id='user' />
          </div>
          <div >
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
