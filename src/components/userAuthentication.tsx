// Contains use of npm 'Unstated' Module

import * as React from 'react';
import { Container } from 'unstated';


class UserAuthentication extends Container<any> {
    state = {
        isUserLoggedIn: (localStorage.getItem('userLogin') ? true : false)
    };

    constructor() {
        super();
        console.log('userAuthentication - constructor');
    }

    // checkUserLoggedIn = () => {
    //     this.setState({ isUserLoggedIn: (localStorage.getItem('userLogin') ? true : false) });
    // }

    // render() {
    //     return (
    //         <div>

    //         </div>
    //     );
    // }
}

export default UserAuthentication;