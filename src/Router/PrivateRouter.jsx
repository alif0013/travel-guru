import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const { user, loading } = useContext(AuthContext)

    // user kothay jabe tar location id soho
    const location = useLocation()
    console.log(location.pathname);



    // onAuthStateChange firebase ke call diye asha porjonto w8 korte hobe
    if (loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    // user thakle all app mane children ke show korbe
    if (user) {
        return children;
    }

    // user na thakle direct login page e navigate korbe
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;