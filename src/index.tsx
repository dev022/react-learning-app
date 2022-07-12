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
import { Provider } from 'react-redux';
import { store } from './store';
import axios from "axios";

const authToken = sessionStorage.getItem('token');

// axios http interceptor for request , it will executed before every axios http request get called.
// it's useful to set headers for all request or set headers to specific cases || do stuff before sending every request.
axios.interceptors.request.use((request) => {
  if (authToken) {
    request.headers['Authorization'] = authToken;
  }
  request.headers['Content-Type'] = "application/json";
  console.log("intercepted request");
  return request;
}, (error) => {
  return Promise.reject(error);
});

// axios http interceptor for response, it will executed after we got the response.
// its used to modify response or handle response error like 401,403,etc.
axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
}, (error) => {
  console.log(error);
  // when unauthorized , redirect to login page
  if (error.response.status === 401) {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/login";
  }
});


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

  // provide redux store to whole application
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/counterList" element={<FinalCounterList />} /> */}
        {/* <Route index element={<SignUpForm />}/> */}
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/signup' element={<SignUpForm />}/> */}
        <Route path='/pages/*' element={<FullLayout />} />
        {/* if someone enters thr route which is not exist then we can redirect to other route */}
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </Provider>


  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
