import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_AWARD_DETAIL } from '../../../constant/api';

export const getAwardDetail: any = createAsyncThunk('AwardDetail/getAwardDetail', async () => {
    try {
        const response = await axios.get(API_AWARD_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getAwardDetailByID: any = createAsyncThunk('AwardDetail/getAwardDetailByID', async (data: any) => {
    const { maGiaiThuong, maCanBo } = data;
    try {
        const response = await axios.get(`${API_AWARD_DETAIL}/${maGiaiThuong}/${maCanBo}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postAwardDetail: any = createAsyncThunk('AwardDetail/postAwardDetail', async (data: any) => {
    try {
        const response = await axios.post(API_AWARD_DETAIL, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putAwardDetail: any = createAsyncThunk('AwardDetail/putAwardDetail', async (data: any) => {
    const { maGiaiThuong, maCanBo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_AWARD_DETAIL}/${maGiaiThuong}/${maCanBo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteAwardDetail: any = createAsyncThunk('AwardDetail/deleteAwardDetail', async (data: any) => {
    const { maGiaiThuong, maCanBo } = data;
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_AWARD_DETAIL}/${maGiaiThuong}/${maCanBo}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface AwardDetail {
    AwardDetailList: [];
    AwardDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: AwardDetail = {
    AwardDetailList: [],
    AwardDetailListByID: [],
    error: '',
    loading: false,
};

const AwardDetailSlice = createSlice({
    name: 'AwardDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getAwardDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getAwardDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.AwardDetailList = action.payload;
            console.log(state.AwardDetailList);
        },
        [getAwardDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getAwardDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getAwardDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.AwardDetailListByID = action.payload;
            console.log(state.AwardDetailListByID);
        },
        [getAwardDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postAwardDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postAwardDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.AwardDetailList);
        },
        [postAwardDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putAwardDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putAwardDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.AwardDetailList);
        },
        [putAwardDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default AwardDetailSlice.reducer;
