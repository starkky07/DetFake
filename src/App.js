import React from 'react';
import './App.css';
import Landing from './components/landing/landing'
import Signin from './components/signin';
import Detector from './components/detector'
import './styles/app.sass'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/detect" component={ Detector }/>
        <Route path="/signin" component={ Signin }/>
        <Route path="/" component={ Landing }/>  
      </Switch> 
    
    </BrowserRouter>
  );
}

export default App;
