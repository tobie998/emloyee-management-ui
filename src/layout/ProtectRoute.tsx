import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

const ProtectRoute: React.FC<Props> = (props: Props) => {
    const token = sessionStorage.getItem('Token');
    console.log(token);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <div>{props.children}</div>;
};

export default ProtectRoute;
