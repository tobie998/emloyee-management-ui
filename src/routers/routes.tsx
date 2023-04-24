import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Management_EmployeesDetails from '../pages/Management_Employees/Management_Employees_Details';
import Management_ResearchEmployee from '../pages/Management_Research/Management_Research_Employee';
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'employees-detail',
                element: <Management_EmployeesDetails />,
            },
            { path: 'education' },
            { path: 'research-employee', element: <Management_ResearchEmployee /> },
        ],
    },
]);

export default router;
