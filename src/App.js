import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="wrap_app">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;