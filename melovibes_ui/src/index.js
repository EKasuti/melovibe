import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


import MeloVibePage from './pages/Melovibe';

ReactDOM.render(
  <Router>
    <div className='bg-background-color flex flex-col min-h-screen'>
    
      <Routes>
        <Route path="/" element={<MeloVibePage />} />
  
      </Routes>
     
    </div>
  </Router>,
  document.getElementById('root')
);
