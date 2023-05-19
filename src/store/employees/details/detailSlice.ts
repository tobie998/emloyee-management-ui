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
    },
});

export default employeeDetailSlice.reducer;
