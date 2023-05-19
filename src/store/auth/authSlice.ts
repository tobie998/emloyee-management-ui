import axios from '../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_AUTH } from '../../constant/api';

export const login: any = createAsyncThunk('auth/login', async ({ userInfo, navigate }: any) => {
    try {
        const response = await axios.post(API_AUTH, userInfo);

        const token = response.data.token;
        if (token) {
            sessionStorage.setItem('Token', token);
            navigate('/');
        } else {
            navigate('/login');
        }
        return response.data;
    } catch (err) {
        console.log('13', err);
        return err;
    }
});

interface Auth {
    user: string;
    token: string;
    role: string;
    error: string;
    loading: boolean;
}

const initialState: Auth = {
    user: '',
    token: '',
    role: '',
    error: '',
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default authSlice.reducer;
