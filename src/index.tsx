import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import FinalCounterList from './components/finalCounterList';
// import SignUpForm from './components/signUp';
import FullLayout from './components/fullLayout';
import Login from './components/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // if you wrap this inside <React.StrictMode> then all your component's function,hooks,constructor
  // will call 2 times , for development mode & debugging purpose.

  // <React.StrictMode>
  //  <App />

  //  <BrowserRouter>: It is used for handling the dynamic URL.
  //  <HashRouter>: It is used for handling the static request.

    <BrowserRouter>
      <Routes>
        {/* <Route path="/counterList" element={<FinalCounterList />} /> */}
        {/* <Route index element={<SignUpForm />}/> */}
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/signup' element={<SignUpForm />}/> */}
        <Route path='/pages/*' element={<FullLayout />}/>
        {/* if someone enters thr route which is not exist then we can redirect to other route */}
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
