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
            <div className='container'>
                <div className='d-flex justify-content-center'> 
                    <div className='404Page text-center mt-3'>
                        <h1>404</h1>
                        <h4>Page Not Found</h4>
                        <button className='btn btn-secondary btn-sm'>
                        <Link to='/pages/home' className='text-white'>Go To Home Page</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Page404;