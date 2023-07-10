import React, { useContext } from 'react';
import { AuthContex } from '../../Context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
/*
1. only allow authentication user to visit the route

2. redirect user to the route they wanted to go 


*/ 

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();

if(loading){
return <Spinner animation="border" variant="primary"></Spinner>
}
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;

};

export default PrivetRoute;