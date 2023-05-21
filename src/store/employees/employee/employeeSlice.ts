import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_EMPLOYEE } from '../../../constant/api';

export const getEmployee: any = createAsyncThunk('employeeDetail/getEmployee', async () => {
    try {
        const response = await axios.get(API_EMPLOYEE);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postEmployee: any = createAsyncThunk('employeeDetail/postEmployee', async (data: any) => {
    try {
        const response = await axios.post(API_EMPLOYEE, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putEmployee: any = createAsyncThunk('employeeDetail/putEmployee', async (data: any) => {
    const { macanbo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_EMPLOYEE}/${macanbo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteEmployee: any = createAsyncThunk('employeeDetail/deleteEmployee', async (macanbo: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_EMPLOYEE}/${macanbo}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface EmployeeDetails {
    employeeDetailList: [];
    error: string;
    loading: boolean;
}

const initialState: EmployeeDetails = {
    employeeDetailList: [],
    error: '',
    loading: false,
};

const employeeDetailSlice = createSlice({
    name: 'employeeDetail',
    initialState,
    reducers: {},
    extraReducers: {
        [getEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [getEmployee.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.employeeDetailList = action.payload;
            console.log(state.employeeDetailList);
        },
        [getEmployee.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [postEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [postEmployee.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.employeeDetailList);
        },
        [postEmployee.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [putEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [putEmployee.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.employeeDetailList);
        },
        [putEmployee.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default employeeDetailSlice.reducer;
