import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';
import Form from './Form';
import Footer from './components/Footer'
import FormSignup from './FormSignup';





function App() {
  return (
    <>
    <Router>
      <Navbar />
      
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/services' component = {Services} />
        <Route path = '/products' component = {Products} />
        <Route path = '/Form' component = {Form} />
        <Route path = '/login' component = {Login} />
        <Route path = '/signup' component = {FormSignup} />
        <Route path = '/profile' component = {Profile} />
        <Route path = '/not-found' component = {NotFound} />
        

      </Switch>
      <Footer/>
      </Router>
    </>
    
  );
}

export default App;
