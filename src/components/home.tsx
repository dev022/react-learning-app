import * as React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Component } from 'react';

// interface HomeProps {
    
// }
 
// interface HomeState {
    
// }

const Home = () => {
    const navigate = useNavigate();

    // set search params when navigate to other route.
    const goToAbout = () => {
        navigate({
            pathname:'/pages/about',
            search: '?name=test&age=20'
        });
    }

    return(
        <div>
            <h3>Home Component</h3>
            <button className='btn btn-secondary btn-sm my-3' onClick={goToAbout}>Go to About Page with search params</button>
        </div>
    )
}

// class Home extends Component<HomeProps, HomeState> {
//     state = {};
//     render() { 
//         return ( 
//             <div>
//                 <h3>Home Component</h3>
//                 <button onClick={goToAbout}>Go to About Page with search params</button>
//             </div>
//         );
//     }
// }
 
export default Home;