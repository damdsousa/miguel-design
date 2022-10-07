import React from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";


function App() {

  return (
    <Router>
      <Home />
    </Router>

  );
}

export default App;
