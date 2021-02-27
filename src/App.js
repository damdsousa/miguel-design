import React from 'react';
import './App.css';
import Home from './pages'
import {BrowserRouter as Router} from 'react-router-dom';
import { Helmet } from "react-helmet";

function App() {
  return (
    
    <Router>
    <Helmet>
        <title>Miguel Lopes</title>
        <link rel="icon" type="image/png" href="../src/assets/images/square.png" sizes="16x16" />
      </Helmet>
      <Home />
    </Router>
  );
}

export default App;
