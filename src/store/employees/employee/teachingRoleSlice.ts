import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_TEACHING_ROLE } from '../../../constant/api';

export const getTeachingRole: any = createAsyncThunk('teachingRole/getTeachingRole', async () => {
    try {
        const response = await axios.get(API_TEACHING_ROLE);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getTeachingRoleByID: any = createAsyncThunk(
    'teachingRole/getTeachingRoleByID',
    async (machucdanh: any) => {
        try {
            const response = await axios.get(`${API_TEACHING_ROLE}/${machucdanh}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postTeachingRole: any = createAsyncThunk('teachingRole/postTeachingRole', async (data: any) => {
    try {
        const response = await axios.post(API_TEACHING_ROLE, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putTeachingRole: any = createAsyncThunk('teachingRole/putTeachingRole', async (data: any) => {
    const { machucdanh } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_TEACHING_ROLE}/${machucdanh}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteTeachingRole: any = createAsyncThunk('teachingRole/deleteTeachingRole', async (machucdanh: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_TEACHING_ROLE}/${machucdanh}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface TeachingRole {
    teachingRoleList: [];
    teachingRoleListByID: [];
    error: string;
    loading: boolean;
}

const initialState: TeachingRole = {
    teachingRoleList: [],
    teachingRoleListByID: [],
    error: '',
    loading: false,
};

const TeachingRoleSlice = createSlice({
    name: 'teachingRole',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getTeachingRole.pending]: (state, action) => {
            state.loading = true;
        },
        [getTeachingRole.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.teachingRoleList = action.payload;
            console.log(state.teachingRoleList);
        },
        [getTeachingRole.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getTeachingRoleByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getTeachingRoleByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.teachingRoleListByID = action.payload;
            console.log(state.teachingRoleListByID);
        },
        [getTeachingRoleByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postTeachingRole.pending]: (state, action) => {
            state.loading = true;
        },
        [postTeachingRole.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.TeachingRoleDetailList = action.payload;
            console.log(state.teachingRoleList);
        },
        [postTeachingRole.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putTeachingRole.pending]: (state, action) => {
            state.loading = true;
        },
        [putTeachingRole.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.TeachingRoleDetailList = action.payload;
            console.log(state.teachingRoleList);
        },
        [putTeachingRole.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default TeachingRoleSlice.reducer;
