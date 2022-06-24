import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

interface Page404Props {
    
}
 
interface Page404State {
    
}
 
class Page404 extends Component<Page404Props, Page404State> {
    render() { 
        return ( 
            <div className='404Page text-center'>
                <h1>404</h1>
                <p>Page Not Found</p>
                <button className='btn btn-secondary btn-sm'>
                   <Link to='/pages/home' className='text-white'>Go To Home Page</Link>
                </button>
            </div>
        );
    }
}
 
export default Page404;