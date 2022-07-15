import { Navigate, Outlet } from "react-router-dom";
import { Subscribe } from "unstated";
import UserAuthentication from "./userAuthentication";

// const useAuth = () => {
//     // check user is logged in or not
//     const user = { loggedIn: localStorage.getItem('userLogin') ? true : false };
//     return user && user.loggedIn;
// };

// check user is logged in or not. if logged in then allow to route which are protected
// means wrapped inside ProtectedRoutes , otherwise navigate to other path on which you want to redirect user.
// const ProtectedRoutes = () => {
//     const isAuth = useAuth();
//     return isAuth ? <Outlet /> : <Navigate to="/" /> ;
// };

const ProtectedRoutes = () => {
    return (

        // Subscribe is of npm 'Unstated' module. its used to subscribe the UserAuthentication
        // and we can use its state here.
        <Subscribe to={[UserAuthentication]}>
            {auth => (
                auth.state.isUserLoggedIn ? <Outlet /> : <Navigate to="/" />
            )}
        </Subscribe>
    );
};


export default ProtectedRoutes;