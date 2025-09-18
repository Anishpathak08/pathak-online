import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'
import './i18n';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function InitAOS() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <InitAOS />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

