import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Logo from './components/Logo';
import SecundPage from './components/SecundPage';


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
        <SecundPage />
      </div>
    </>
  );
}

export default App;