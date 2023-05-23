import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_REWARD } from '../../../constant/api';

export const getReward: any = createAsyncThunk('reward/getReward', async () => {
    try {
        const response = await axios.get(API_REWARD);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getRewardByID: any = createAsyncThunk('reward/getRewardByID', async (makhenthuong: any) => {
    try {
        const response = await axios.get(`${API_REWARD}/${makhenthuong}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postReward: any = createAsyncThunk('reward/postReward', async (data: any) => {
    try {
        const response = await axios.post(API_REWARD, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putReward: any = createAsyncThunk('reward/putReward', async (data: any) => {
    const { maKhenThuong } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_REWARD}/${maKhenThuong}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteReward: any = createAsyncThunk('reward/deleteReward', async (makhenthuong: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_REWARD}/${makhenthuong}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface Reward {
    rewardList: [];
    rewardListByID: [];
    error: string;
    loading: boolean;
}

const initialState: Reward = {
    rewardList: [],
    rewardListByID: [],
    error: '',
    loading: false,
};

const RewardSlice = createSlice({
    name: 'reward',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getReward.pending]: (state, action) => {
            state.loading = true;
        },
        [getReward.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.rewardList = action.payload;
            console.log(state.rewardList);
        },
        [getReward.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getRewardByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getRewardByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.rewardListByID = action.payload;
            console.log(state.rewardListByID);
        },
        [getRewardByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postReward.pending]: (state, action) => {
            state.loading = true;
        },
        [postReward.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.RewardDetailList = action.payload;
            console.log(state.rewardList);
        },
        [postReward.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putReward.pending]: (state, action) => {
            state.loading = true;
        },
        [putReward.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.RewardDetailList = action.payload;
            console.log(state.rewardList);
        },
        [putReward.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default RewardSlice.reducer;
