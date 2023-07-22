import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);    if (loading) {
        return <div className="flex justify-center py-5"> <span className="loading loading-dots loading-lg"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;