import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_WORKING_ROLE } from '../../../constant/api';

export const getWorkingRole: any = createAsyncThunk('workingRole/getWorkingRole', async () => {
    try {
        const response = await axios.get(API_WORKING_ROLE);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getWorkingRoleByID: any = createAsyncThunk('workingRole/getWorkingRoleByID', async (madonvi: any) => {
    try {
        const response = await axios.get(`${API_WORKING_ROLE}/${madonvi}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postWorkingRole: any = createAsyncThunk('workingRole/postWorkingRole', async (data: any) => {
    try {
        const response = await axios.post(API_WORKING_ROLE, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putWorkingRole: any = createAsyncThunk('workingRole/putWorkingRole', async (data: any) => {
    const { maChucVu } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_WORKING_ROLE}/${maChucVu}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteWorkingRole: any = createAsyncThunk('workingRole/deleteWorkingRole', async (maChucVu: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_WORKING_ROLE}/${maChucVu}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface WorkingRole {
    workingRoleList: [];
    workingRoleListByID: [];
    error: string;
    loading: boolean;
}

const initialState: WorkingRole = {
    workingRoleList: [],
    workingRoleListByID: [],
    error: '',
    loading: false,
};

const WorkingRoleSlice = createSlice({
    name: 'workingRole',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getWorkingRole.pending]: (state, action) => {
            state.loading = true;
        },
        [getWorkingRole.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.workingRoleList = action.payload;
            console.log(state.workingRoleList);
        },
        [getWorkingRole.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getWorkingRoleByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getWorkingRoleByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.workingRoleListByID = action.payload;
            console.log(state.workingRoleListByID);
        },
        [getWorkingRoleByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postWorkingRole.pending]: (state, action) => {
            state.loading = true;
        },
        [postWorkingRole.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.WorkingRoleDetailList = action.payload;
            console.log(state.workingRoleList);
        },
        [postWorkingRole.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putWorkingRole.pending]: (state, action) => {
            state.loading = true;
        },
        [putWorkingRole.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.WorkingRoleDetailList = action.payload;
            console.log(state.workingRoleList);
        },
        [putWorkingRole.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default WorkingRoleSlice.reducer;
