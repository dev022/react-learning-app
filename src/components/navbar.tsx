import * as React from 'react';
import { NavLink } from 'react-router-dom';

// interface NavbarProps {
    
// }
 
// interface NavbarState {
    
// }

// if component which has no state are called as stateless functional component.
// for declare this type of component we can also use function instead of class.
// in that props are not accesible by this.props , it has props as argument.

// const Navbar = (props:any) => {
//     return ( 
//         <nav className="navbar bg-light">
//             <div className="container-fluid">
//                 <span className="navbar-brand mb-0 h1">Navbar</span>
//             </div>
//         </nav>
//     );
// }


class Navbar extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        console.log("Navbar - constructor");
    }

    componentDidMount(){
        console.log("Navbar - mounted");
    }

    onLogOut = () => {
        localStorage.removeItem('userLogin');
        const navigate = this.props.navigate;
        navigate("/login");
    };

    render() { 
        console.log("Navbar - rendered");
        return ( 

            <nav className="navbar navbar-expand-sm bg-light firstAppNavbar">
                <div className="container-fluid">
                    <NavLink to='home' className="navbar-brand">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Home</a> */}
                                {/* Use NavLink: it will apply active class to current one, only Link is not adding active class */}
                                <NavLink to="home" className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Dashboard</a> */}
                                {/* state is used to pass data to route , also we can use it to pass state,props of one comp to other */}
                                <NavLink to="dashboard/Dev" state={{name:'test',age:20}} className='nav-link'>Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="about" className='nav-link'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="counterList" className='nav-link'>Counter List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="todo" className='nav-link'>ToDo</NavLink>
                            </li>
                        </ul>
                        <div>
                            <button className="btn btn-outline-success" onClick={this.onLogOut}>Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
 

// eslint-disable-next-line import/no-anonymous-default-export
// export default () =>{
//     // this is one way to use route hooks in class component , otherwise you need to make functional component.
//     const navigate = useNavigate();
//     return(
//         <Navbar navigate={navigate}/>
//     )
// };

export default Navbar;