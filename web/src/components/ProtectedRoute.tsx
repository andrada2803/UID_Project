import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from '../store/store';

type Props = {
    children: JSX.Element;
    redirectTo?: string;
};

const ProtectedRoute: React.FC<Props> = (props) => {
    const isLoggedIn = useAppSelector((state) => state.userState.isLoggedIn);

    return isLoggedIn ? (
        props.children
    ) : (
        <Navigate to={props.redirectTo ?? '/login'} />
    );
};

export default ProtectedRoute;
