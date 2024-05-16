import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss';
// import { Provider } from 'react-redux';
// import store from './s'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
