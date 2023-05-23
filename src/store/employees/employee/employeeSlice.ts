import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_EMPLOYEE } from '../../../constant/api';

export const getEmployee: any = createAsyncThunk('employee/getEmployee', async () => {
    try {
        const response = await axios.get(API_EMPLOYEE);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getEmployeeByID: any = createAsyncThunk('employee/getEmployeeByID', async (macanbo: any) => {
    try {
        const response = await axios.get(`${API_EMPLOYEE}/${macanbo}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postEmployee: any = createAsyncThunk('employee/postEmployee', async (data: any) => {
    try {
        const response = await axios.post(API_EMPLOYEE, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putEmployee: any = createAsyncThunk('employee/putEmployee', async (data: any) => {
    const { maCanBo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_EMPLOYEE}/${maCanBo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteEmployee: any = createAsyncThunk('employee/deleteEmployee', async (macanbo: any) => {
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
    employeeList: [];
    employeeListByID: [];
    error: string;
    loading: boolean;
}

const initialState: EmployeeDetails = {
    employeeList: [],
    employeeListByID: [],
    error: '',
    loading: false,
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [getEmployee.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.employeeList = action.payload;
            console.log(state.employeeList);
        },
        [getEmployee.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getEmployeeByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getEmployeeByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.employeeListByID = action.payload;
            console.log(state.employeeListByID);
        },
        [getEmployeeByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [postEmployee.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.employeeList);
        },
        [postEmployee.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putEmployee.pending]: (state, action) => {
            state.loading = true;
        },
        [putEmployee.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.employeeList);
        },
        [putEmployee.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default employeeSlice.reducer;
