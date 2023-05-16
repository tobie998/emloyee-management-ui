import axios from '../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_API } from '../../constant/api';

export const login: any = createAsyncThunk('auth/login', async (formValue: any) => {
    try {
        const response = await axios.post(AUTH_API, formValue);
        console.log(response);
        // navigate("/dashboard");
        return response.data;
    } catch (err) {
        console.log('13', err);
        return err;
    }
});

interface Auth {
    user: string;
    role: string;
    error: string;
    loading: boolean;
}

const initialState: Auth = {
    user: '',
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
            state.loading = false;
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default authSlice.reducer;
