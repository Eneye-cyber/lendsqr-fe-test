import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/Login';
import Users from '../pages/dashboard/users/Users';
import UserDetail from '../pages/dashboard/users/UserDetail';

  
export default function Index() {
  const shouldRedirect = true;
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />}  />
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="users" element={<Users />}></Route>
              <Route path="users/:id" element={<UserDetail />}></Route>
            </Route>
        </Routes>
      </Router>
    );
  }




