// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' 

// import { Input, initTWE } from "tw-elements"; // <-- DELETE ESTA LINHA

// initTWE({ Input }, { allowReinits: true }); // <-- DELETE ESTA LINHA

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)