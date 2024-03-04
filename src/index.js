import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppSource from './AppSource';
import AppPortfolio from './AppPorfolio';
import { ThemeProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppSource/> */}
    {/* <ThemeProvider>
    <AppPortfolio/>
    </ThemeProvider> */}
   
  </React.StrictMode>
);

// If you want to start measuring pexrformance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
