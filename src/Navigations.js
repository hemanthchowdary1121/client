import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Repairs from './Repairs';
import Payment from './Payment';

const Navigations = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/repair' element={<Repairs/>}/>
      <Route path='/payment' element={<Payment/>} />
    </Routes>
  </Router>
  )
}

export default Navigations