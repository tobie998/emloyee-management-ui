import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_REWARD_DETAIL } from '../../../constant/api';

export const getRewardDetail: any = createAsyncThunk('rewardDetail/getRewardDetail', async () => {
    try {
        const response = await axios.get(API_REWARD_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getRewardDetailByID: any = createAsyncThunk('rewardDetail/getRewardDetailByID', async (data: any) => {
    const { makhenthuong, macanbo } = data;

    try {
        const response = await axios.get(`${API_REWARD_DETAIL}/${makhenthuong}/${macanbo}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postRewardDetail: any = createAsyncThunk('rewardDetail/postRewardDetail', async (data: any) => {
    try {
        const response = await axios.post(API_REWARD_DETAIL, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putRewardDetail: any = createAsyncThunk('rewardDetail/putRewardDetail', async (data: any) => {
    const { makhenthuong, macanbo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_REWARD_DETAIL}/${makhenthuong}/${macanbo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteRewardDetail: any = createAsyncThunk('rewardDetail/deleteRewardDetail', async (data: any) => {
    const { makhenthuong, macanbo } = data;
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_REWARD_DETAIL}/${makhenthuong}/${macanbo}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface RewardDetail {
    RewardDetailList: [];
    RewardDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: RewardDetail = {
    RewardDetailList: [],
    RewardDetailListByID: [],
    error: '',
    loading: false,
};

const RewardDetailSlice = createSlice({
    name: 'RewardDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getRewardDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getRewardDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.RewardDetailList = action.payload;
            console.log(state.RewardDetailList);
        },
        [getRewardDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getRewardDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getRewardDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.RewardDetailListByID = action.payload;
            console.log(state.RewardDetailListByID);
        },
        [getRewardDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postRewardDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postRewardDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.RewardDetailDetailList = action.payload;
            console.log(state.RewardDetailList);
        },
        [postRewardDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putRewardDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putRewardDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.RewardDetailDetailList = action.payload;
            console.log(state.RewardDetailList);
        },
        [putRewardDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default RewardDetailSlice.reducer;
