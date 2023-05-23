import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_WORKING_ROLE_DETAIL } from '../../../constant/api';

export const getWorkingRoleDetail: any = createAsyncThunk('workingRoleDetail/getWorkingRoleDetail', async () => {
    try {
        const response = await axios.get(API_WORKING_ROLE_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getWorkingRoleDetailByID: any = createAsyncThunk('workingRoleDetail/getWorkingRoleDetailByID', async (data: any) => {
    const { madonvi, macanbo } = data;
    
    try {
        const response = await axios.get(`${API_WORKING_ROLE_DETAIL}/${madonvi}/${macanbo}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postWorkingRoleDetail: any = createAsyncThunk('workingRoleDetail/postWorkingRoleDetail', async (data: any) => {
    try {
        const response = await axios.post(API_WORKING_ROLE_DETAIL, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putWorkingRoleDetail: any = createAsyncThunk('workingRoleDetail/putWorkingRoleDetail', async (data: any) => {
    const { madonvi, macanbo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_WORKING_ROLE_DETAIL}/${madonvi}/${macanbo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteWorkingRoleDetail: any = createAsyncThunk('workingRoleDetail/deleteWorkingRoleDetail', async (data: any) => {
    const { madonvi, macanbo } = data;
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_WORKING_ROLE_DETAIL}/${madonvi}/${macanbo}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface WorkingRoleDetail {
    workingRoleDetailList: [];
    workingRoleDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: WorkingRoleDetail = {
    workingRoleDetailList: [],
    workingRoleDetailListByID: [],
    error: '',
    loading: false,
};

const WorkingRoleDetailSlice = createSlice({
    name: 'workingRoleDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getWorkingRoleDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getWorkingRoleDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.workingRoleDetailList = action.payload;
            console.log(state.workingRoleDetailList);
        },
        [getWorkingRoleDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getWorkingRoleDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getWorkingRoleDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.workingRoleDetailListByID = action.payload;
            console.log(state.workingRoleDetailListByID);
        },
        [getWorkingRoleDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postWorkingRoleDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postWorkingRoleDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.WorkingRoleDetailDetailList = action.payload;
            console.log(state.workingRoleDetailList);
        },
        [postWorkingRoleDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putWorkingRoleDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putWorkingRoleDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.WorkingRoleDetailDetailList = action.payload;
            console.log(state.workingRoleDetailList);
        },
        [putWorkingRoleDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default WorkingRoleDetailSlice.reducer;
