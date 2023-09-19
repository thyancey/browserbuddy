import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const root = document.createElement('div');
root.id = 'crx-root';
document.body.appendChild(root);

console.log('hi')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
