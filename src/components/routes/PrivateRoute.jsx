import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    // i made mistake previous time , i didn't use {user}

    if (loader) {
        return <p className="text-center font-bold mt-10">Loading...</p>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;