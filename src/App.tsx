import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Logo from './components/Logo';
import SecundTask from './components/SecundTask';
import ThirdTask from './components/ThirdTask';
import FourthTask from './components/FourthTask';


function App() {
  return (
    <>
      <div className='app-container'>
        <Logo />
        <div className='main'>
          <Hero />
          <Sidebar />
        </div>
      </div>
      <div className='app-container'>
        <SecundTask />
        <ThirdTask />
      </div>     
      <div className='app-container'>
        <FourthTask/>
      </div>   
    </>
  );
}

export default App;