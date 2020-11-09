import React from 'react';

import HomePage from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";

import AuthState from "./context/auth/AuthState";

import LoginPage from "./pages/login/login";

import {Route} from "react-router-dom";


import  PrivateRoute  from "./pages/privateRouteUtils/privateroute";


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    
      <AuthState>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <PrivateRoute exact path="/admin-dashboard" component={Dashboard}></PrivateRoute>
      </AuthState>
  
  );
}

export default App;
