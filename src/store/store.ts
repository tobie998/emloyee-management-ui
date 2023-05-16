import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/authSlice';

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        //   tour: TourReducer,
    },
});

export default store;
