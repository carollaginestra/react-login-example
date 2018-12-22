import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils/LoginManager';

const PrivateRoute = (props) => {
    const { component: Component, ...others } = props; //spread operator
    return (
        <Route
            {...others}
            render={propsRender => { 
                return isAuthenticated()
                    ? <Component {...propsRender} />
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: propsRender.location }
                    }} />
            }}
        />
    )
}

export default PrivateRoute;