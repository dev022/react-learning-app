import * as React from 'react';
// import { Component } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Page404 from './404Page';
import About from './about';
import AboutChild1 from './aboutChild1';
import AboutChild2 from './aboutChild2';
import Dashboard from './dashboard';
// import FinalCounterList from './finalCounterList';
import Home from './home';
import Navbar from './navbar';
import ProtectedRoutes from './protectedRoutes';

// interface FullLayoutProps {
    
// }
 
// interface FullLayoutState {
    
// }

// lazy loading
const CounterListComponent = React.lazy(() => import("./finalCounterList"));
 
const FullLayout = () => {
    const navigate = useNavigate();
    // render() { 
        return ( 
            <div className='app'>
                <Navbar navigate={navigate}/>
                <div className="app-body">
                    <main className='main'>
                        {/* <BrowserRouter> */}
                            <Routes>
                                {/* Wrap routes inside ProtectedRoutes, which you want to protect like not allow to access if user is not logged in */}
                                {/* ProtectedRoutes file we are maintaining logic to check user is logged in or not */}
                                <Route element={<ProtectedRoutes />}>
                                    <Route path='/' element={<Navigate to='/pages/home'/>}/>
                                    <Route path='/home' element={<Home />} />
                                    <Route path='/dashboard/:name' element={<Dashboard />} />
                                    <Route path='/about' element={<About />}>
                                        {/* child routes */}
                                        <Route path='aboutChild1' element={<AboutChild1 />}/>
                                        <Route path='aboutChild2' element={<AboutChild2 />}/>
                                    </Route>
                                    {/* Lazy loading */}
                                    <Route path='/counterList' element={
                                        <React.Suspense fallback={<div>Loading...</div>}>
                                            <CounterListComponent />
                                        </React.Suspense>
                                    }/>
                                    {/* if someone enters the route which is not exist then we can display 404 page component */}
                                    <Route path='/*' element={<Page404 />}/>
                                </Route>
                            </Routes>
                        {/* </BrowserRouter> */}
                    </main>
                </div>
            </div>
        );
    // }
}
 
export default FullLayout;