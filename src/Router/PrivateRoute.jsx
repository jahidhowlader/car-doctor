import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';

const PrivateRoute = ({children }) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    console.log(location);

    if(loading) {
        return <Loading></Loading>
    }

    if(user){
        // loading
        return children
    }

    return <Navigate to="/auth/signin" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;