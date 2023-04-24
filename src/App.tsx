import React from 'react';
import logo from './logo.svg';
import 'antd/dist/reset.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/routes';

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
