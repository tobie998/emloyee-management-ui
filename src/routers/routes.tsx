import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Management_EmployeesDetails from '../pages/Management_Employees/Management_Employees_Details';
import Management_Employees_GivenDegree from '../pages/Management_Employees/Management_Employees_GivenDegree';
import Management_Employees_Award from '../pages/Management_Employees/Management_Employees_Award';
import Management_Employees_LanguageKnowledge from '../pages/Management_Employees/Management_Employees_LanguageKnowledge';
import Management_Employees_Punishment from '../pages/Management_Employees/Management_Employees_Punishment';
import Management_Employees_ResearchAssessment from '../pages/Management_Employees/Management_Employees_ResearchAssessment';
import Management_Employees_ResearchCategory from '../pages/Management_Employees/Management_Employees_ResearchCategory';
import Management_Employees_ResearchMajor from '../pages/Management_Employees/Management_Employees_ResearchMajor';
import Management_Employees_ResearchProject from '../pages/Management_Employees/Management_Employees_ResearchProject';
import Management_Employees_Reward from '../pages/Management_Employees/Management_Employees_Reward';
import Management_Employees_TeachingRole from '../pages/Management_Employees/Management_Employees_TeachingRole';
import Management_Employees_TrainingProcess from '../pages/Management_Employees/Management_Employees_TrainingProcess';
import Management_Employees_Unit from '../pages/Management_Employees/Management_Employees_Unit';
import Management_Employees_WorkingRole from '../pages/Management_Employees/Management_Employees_WorkingRole';
import Management_Employees_PublicResearch from '../pages/Management_Employees/Management_Employees_PublicResearch';
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
                path: 'employees-award',
                element: <Management_Employees_Award />,
            },
            {
                path: 'employees-detail',
                element: <Management_EmployeesDetails />,
            },
            {
                path: 'employees-given-degree',
                element: <Management_Employees_GivenDegree />,
            },
            {
                path: 'employees-language-knowledge',
                element: <Management_Employees_LanguageKnowledge />,
            },
            {
                path: 'employees-punishment',
                element: <Management_Employees_Punishment />,
            },
            {
                path: 'employees-research-assessment',
                element: <Management_Employees_ResearchAssessment />,
            },
            {
                path: 'employees-research-category',
                element: <Management_Employees_ResearchCategory />,
            },
            {
                path: 'employees-research-major',
                element: <Management_Employees_ResearchMajor />,
            },
            {
                path: 'employees-research-project',
                element: <Management_Employees_ResearchProject />,
            },
            {
                path: 'employees-reward',
                element: <Management_Employees_Reward />,
            },
            {
                path: 'employees-teaching-role',
                element: <Management_Employees_TeachingRole />,
            },
            {
                path: 'employees-training-process',
                element: <Management_Employees_TrainingProcess />,
            },
            {
                path: 'employees-unit',
                element: <Management_Employees_Unit />,
            },
            {
                path: 'employees-working-role',
                element: <Management_Employees_WorkingRole />,
            },
            {
                path: 'employees-research-public-research',
                element: <Management_Employees_PublicResearch />,
            },
            { path: 'education' },
            { path: 'research-employee', element: <Management_ResearchEmployee /> },
        ],
    },
]);

export default router;
