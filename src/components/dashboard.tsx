import * as React from 'react';
// import { Component } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Dashboard = () => {
    // fetch & use params from router we will use useParams() hook for react-router-dom
    const params = useParams();

    // useLocation() to get data like hash,key,pathName,search,state from route inside one object
    // hash means that we are passing in route like #name
    // state means data which is passed into route
    const location = useLocation();
    console.log(location);

    return ( 
        <h3>{params.name}'s Dashboard Component</h3>
    );
}

// class Dashboard extends Component<DashboardProps, DashboardState> {
//     render() { 
//         return ( 
//             <h3>Dashboard Component</h3>
//         );
//     }
// }
 
export default Dashboard;