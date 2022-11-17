
import { Routes, Route } from "react-router";
import Login from '../../components/Login/Login'
import UserProfile from '../../components/UserProfile/UserProfile'
import Counter from '../../components/Counter/Counter'
import React from 'react';

export default function PageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<UserProfile />} />
            <Route path='/counter' element={<Counter />} /> 
        </Routes>
    )
}