import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import MyAccount from './MyAccount';
import Responses from './Responses';
const Home = (props) => {

  return (
    <Router>
      <Routes>
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/MyAccount" element={<MyAccount />} />
        <Route exact path="/Responses" element={<Responses />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Home;