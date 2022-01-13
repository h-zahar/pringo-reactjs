import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if (isLoading)
    {
        return <div className="d-flex justify-content-center mt-4"><div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div></div>
    }

    return (
        <Route
            {...rest}
            render = {({location}) => 
            !user.email ?
            children :
            <Redirect
            to={{
                pathname: '/feed',
                state: {from: location}
            }} />
            }
        >
            
        </Route>
    )
}

export default UserRoute;