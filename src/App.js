import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import axios from 'axios'; 

const App = () => {

  axios.defaults.baseURL='http://localhost:8080';

  

  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
