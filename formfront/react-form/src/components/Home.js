import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import MyAccount from './MyAccount';
import BankAccounts from './BankAccounts';
import Notifications from './Notifications';
import BankTransactions from './BankTransactions';
const Home = (props) => {

  return (
    <Router>
      <Routes>
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/BankTransactions" element={<BankTransactions />} />
        <Route exact path="/MyAccount" element={<MyAccount />} />
        <Route exact path="/BankAccounts" element={<BankAccounts />} />
        <Route exact path="/Notifications" element={<Notifications />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Home;