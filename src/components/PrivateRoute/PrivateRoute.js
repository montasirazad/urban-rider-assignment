import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [users, setUsers] = useContext(UserContext);
    return (
        <div>
            {
                users.email ? children :
                    <Navigate to='/login' />
            }
        </div>
    );
};

export default PrivateRoute;