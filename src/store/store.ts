import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/authSlice';
import EmployeeReducer from './employees/details/detailSlice';

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        employee: EmployeeReducer,
    },
});

export default store;
