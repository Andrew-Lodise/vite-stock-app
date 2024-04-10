import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App';
import Stock from './routes/Stock';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/stocks/:symbol',
    element: <Stock />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
