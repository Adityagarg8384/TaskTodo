import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/login';
import Register from './components/register';
import User from './components/user';


const router= createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
    </Route>
    <Route path="Register" element={<Register/>}></Route>
    <Route path="Login" element={<Login/>}></Route>
    <Route path="User:/id" element={<User/>}></Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router= {router}></RouterProvider>
  </React.StrictMode>,
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
