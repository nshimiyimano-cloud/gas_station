import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from './components/Accounts/Login.jsx';
import TopMenu from './components/menus/TopMenu.jsx';
import MainMenu from './components/menus/MainMenu.jsx';
import Footer from './components/Home/Footer.jsx';
import Register from './components/Accounts/Register.jsx';
import Home from './components/Home/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <TopMenu />
  <MainMenu />
  
  <Routes>
    
  <Route path='/' element={ <Home />} />
      <Route path='sign-in' element={<Login />}  />
      <Route path='sign-up' element={<Register />}  />
  
  </Routes>
   
  <Footer/>    
  </BrowserRouter>,
);


reportWebVitals();
