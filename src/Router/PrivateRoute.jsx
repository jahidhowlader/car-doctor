import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';

const PrivateRoute = ({children }) => {

    const {user, loading} = useContext(AuthContext)

    if(loading) {
        return <Loading></Loading>
    }

    if(user){
        // loading
        return children
    }

    return <Navigate to="/auth/signin"></Navigate>
};

export default PrivateRoute;