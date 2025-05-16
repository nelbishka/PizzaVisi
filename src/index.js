import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const realError = window.onerror;
window.onerror = function (message, source, lineno, colno, error) {
  if (
    typeof message === "string" &&
    message.includes("ResizeObserver loop completed with undelivered notifications")
  ) {
    return true; // Suppress it
  }
  return realError?.(message, source, lineno, colno, error);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
