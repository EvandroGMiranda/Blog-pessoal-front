import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Home from './paginas/home/Home';
import './App.css';
import { Grid } from "@material-ui/core"
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
