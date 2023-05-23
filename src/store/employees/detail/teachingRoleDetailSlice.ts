import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_TEACHING_ROLE_DETAIL } from '../../../constant/api';

export const getTeachingRoleDetail: any = createAsyncThunk('teachingRoleDetail/getTeachingRoleDetail', async () => {
    try {
        const response = await axios.get(API_TEACHING_ROLE_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getTeachingRoleDetailByID: any = createAsyncThunk(
    'teachingRoleDetail/getTeachingRoleDetailByID',
    async (data: any) => {
    const { machucdanh, macanbo } = data;

        try {
            const response = await axios.get(`${API_TEACHING_ROLE_DETAIL}/${machucdanh}/${macanbo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postTeachingRoleDetail: any = createAsyncThunk('teachingRoleDetail/postTeachingRoleDetail', async (data: any) => {
    try {
        const response = await axios.post(API_TEACHING_ROLE_DETAIL, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putTeachingRoleDetail: any = createAsyncThunk('teachingRoleDetail/putTeachingRoleDetail', async (data: any) => {
    const { machucdanh, macanbo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_TEACHING_ROLE_DETAIL}/${machucdanh}/${macanbo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteTeachingRoleDetail: any = createAsyncThunk('teachingRoleDetail/deleteTeachingRoleDetail', async (data: any) => {
    const { machucdanh, macanbo } = data;
    
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_TEACHING_ROLE_DETAIL}/${machucdanh}/${macanbo}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface TeachingRoleDetail {
    TeachingRoleDetailList: [];
    TeachingRoleDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: TeachingRoleDetail = {
    TeachingRoleDetailList: [],
    TeachingRoleDetailListByID: [],
    error: '',
    loading: false,
};

const TeachingRoleDetailSlice = createSlice({
    name: 'TeachingRoleDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getTeachingRoleDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getTeachingRoleDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.TeachingRoleDetailList = action.payload;
            console.log(state.TeachingRoleDetailList);
        },
        [getTeachingRoleDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getTeachingRoleDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getTeachingRoleDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.TeachingRoleDetailListByID = action.payload;
            console.log(state.TeachingRoleDetailListByID);
        },
        [getTeachingRoleDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postTeachingRoleDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postTeachingRoleDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.TeachingRoleDetailDetailList = action.payload;
            console.log(state.TeachingRoleDetailList);
        },
        [postTeachingRoleDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putTeachingRoleDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putTeachingRoleDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.TeachingRoleDetailDetailList = action.payload;
            console.log(state.TeachingRoleDetailList);
        },
        [putTeachingRoleDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default TeachingRoleDetailSlice.reducer;
