import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/authSlice';
import EmployeeReducer from './employees/employee/employeeSlice';

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        employee: EmployeeReducer,
    },
});

export default store;
