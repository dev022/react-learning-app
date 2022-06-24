import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    // check user is logged in or not
    const user = { loggedIn: localStorage.getItem('userLogin') ? true : false };
    return user && user.loggedIn;
};

// check user is logged in or not. if logged in then allow to route which are protected
// means wrapped inside ProtectedRoutes , otherwise navigate to other path on which you want to redirect user.
const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" /> ;
};

export default ProtectedRoutes;