import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_WORKING_PROCESS } from '../../../constant/api';

export const getWorkingProcessDetail: any = createAsyncThunk('workingProcessDetail/getWorkingProcessDetail', async () => {
    try {
        const response = await axios.get(API_WORKING_PROCESS);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getWorkingProcessDetailByID: any = createAsyncThunk(
    'workingProcessDetail/getWorkingProcessDetailByID',
    async (data: any) => {
    const { maquatrinhcongtac, macanbo } = data;

        try {
            const response = await axios.get(`${API_WORKING_PROCESS}/${maquatrinhcongtac}/${macanbo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postWorkingProcessDetail: any = createAsyncThunk('workingProcessDetail/postWorkingProcessDetail', async (data: any) => {
    try {
        const response = await axios.post(API_WORKING_PROCESS, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putWorkingProcessDetail: any = createAsyncThunk('workingProcessDetail/putWorkingProcessDetail', async (data: any) => {
    const { maQuaTrinhCongTac, maCanBo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_WORKING_PROCESS}/${maQuaTrinhCongTac}/${maCanBo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteWorkingProcessDetail: any = createAsyncThunk(
    'workingProcessDetail/deleteWorkingProcessDetail',
    async (data: any) => {
        const { maquatrinhcongtac, macanbo } = data;
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_WORKING_PROCESS}/${maquatrinhcongtac}/${macanbo}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface WorkingProcessDetail {
    WorkingProcessDetailList: [];
    WorkingProcessDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: WorkingProcessDetail = {
    WorkingProcessDetailList: [],
    WorkingProcessDetailListByID: [],
    error: '',
    loading: false,
};

const WorkingProcessDetailSlice = createSlice({
    name: 'WorkingProcessDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getWorkingProcessDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getWorkingProcessDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.WorkingProcessDetailList = action.payload;
            console.log(state.WorkingProcessDetailList);
        },
        [getWorkingProcessDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getWorkingProcessDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getWorkingProcessDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.WorkingProcessDetailListByID = action.payload;
            console.log(state.WorkingProcessDetailListByID);
        },
        [getWorkingProcessDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postWorkingProcessDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postWorkingProcessDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.WorkingProcessDetailDetailList = action.payload;
            console.log(state.WorkingProcessDetailList);
        },
        [postWorkingProcessDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putWorkingProcessDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putWorkingProcessDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.WorkingProcessDetailDetailList = action.payload;
            console.log(state.WorkingProcessDetailList);
        },
        [putWorkingProcessDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default WorkingProcessDetailSlice.reducer;
