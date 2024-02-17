import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


import LandingPage from './pages/LandingPage';
import MeloVibePage from './pages/MeloVibePage';


ReactDOM.render(
  <Router>
    <div className='flex flex-col '>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/melovibe" element={<MeloVibePage/>} />

  
      </Routes>
     
    </div>
  </Router>,
  document.getElementById('root')
);
