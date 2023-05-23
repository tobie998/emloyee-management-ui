import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_AWARD } from '../../../constant/api';

export const getAward: any = createAsyncThunk('award/getAward', async () => {
    try {
        const response = await axios.get(API_AWARD);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getAwardByID: any = createAsyncThunk('award/getAwardByID', async (magiaithuong: any) => {
    try {
        const response = await axios.get(`${API_AWARD}/${magiaithuong}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postAward: any = createAsyncThunk('award/postAward', async (data: any) => {
    try {
        const response = await axios.post(API_AWARD, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putAward: any = createAsyncThunk('award/putAward', async (data: any) => {
    const { maGiaiThuong } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_AWARD}/${maGiaiThuong}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteAward: any = createAsyncThunk('award/deleteAward', async (magiaithuong: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_AWARD}/${magiaithuong}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface Award {
    awardList: [];
    awardListByID: [];
    error: string;
    loading: boolean;
}

const initialState: Award = {
    awardList: [],
    awardListByID: [],
    error: '',
    loading: false,
};

const awardSlice = createSlice({
    name: 'award',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getAward.pending]: (state, action) => {
            state.loading = true;
        },
        [getAward.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.awardList = action.payload;
            console.log(state.awardList);
        },
        [getAward.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getAwardByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getAwardByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.awardListByID = action.payload;
            console.log(state.awardListByID);
        },
        [getAwardByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postAward.pending]: (state, action) => {
            state.loading = true;
        },
        [postAward.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.awardList);
        },
        [postAward.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putAward.pending]: (state, action) => {
            state.loading = true;
        },
        [putAward.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.awardList);
        },
        [putAward.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default awardSlice.reducer;
