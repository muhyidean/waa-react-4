import React from 'react';
import { useSelector } from 'react-redux';
import './UserProfile.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Products from '../Product/Products';
import { Navigate, useNavigate } from 'react-router';

const UserProfile = (props) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const counter = useSelector(state => state.counter.counter);

  const navigate = useNavigate();
  const [productsState, setProductsState] = useState(
    [
      { id: 1, name: "iPhone 13", price: 3000 },
      { id: 2, name: "iPhone 12", price: 3000 },
      { id: 3, name: "galaxy s20", price: 3000 }
    ]
  );

  useEffect(async () => {
    const headers = {
      'Authorization': `Bearer ${Cookies.get('user')}`
    }
    try {
      const response = await axios.get('api/v1/products', headers);
      setProductsState(response.data);
    } catch (err) {
      console.log(err)
    }
  }, []);

  const main =
    <React.Fragment>
      <main className="profile">
        <h2>My User Profile</h2>
        <p>your current count is: {counter}</p>
        {<Products products={productsState}></Products>}
      </main>
    </React.Fragment>

  if (!isAuthenticated)
    return <Navigate to={"/login"}/>;
  else
    return main;

};

export default UserProfile;
