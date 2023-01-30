import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import './component/Main/call-1.css';
import './component/Main/call-2.css';
import './component/Main/call-3.css';
import './component/Main/call-4.css';
import './component/Main/custom-animation.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
