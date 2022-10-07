import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';



ReactDOM.render(
  <>
  <BrowserRouter>
  <Header/>
    <p className='color'><App /></p>
    </BrowserRouter>
  </>,document.getElementById('root')
);


