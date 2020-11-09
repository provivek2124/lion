import React, {useContext} from 'react';
import AuthContext from '../../context/auth/authContext';
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute({component:Component, ...otherProps}) {
    const{userAuth} = useContext(AuthContext)
    return (
        <Route
        {...otherProps}

        render =  {props => !userAuth ?  (

            <Redirect to='/login'/>
          ):(<Component {...props   }/>)
        }

        
        />
    )
}

export default PrivateRoute;