import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_PUNISHMENT } from '../../../constant/api';

export const getPunishment: any = createAsyncThunk('punishment/getPunishment', async () => {
    try {
        const response = await axios.get(API_PUNISHMENT);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getPunishmentByID: any = createAsyncThunk(
    'punishment/getPunishmentByID',
    async (makyluat: any) => {
        try {
            const response = await axios.get(`${API_PUNISHMENT}/${makyluat}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postPunishment: any = createAsyncThunk('punishment/postPunishment', async (data: any) => {
    try {
        const response = await axios.post(API_PUNISHMENT, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putPunishment: any = createAsyncThunk('punishment/putPunishment', async (data: any) => {
    const { maKyLuat } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_PUNISHMENT}/${maKyLuat}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deletePunishment: any = createAsyncThunk('punishment/deletePunishment', async (makyluat: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_PUNISHMENT}/${makyluat}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface Punishment {
    punishmentList: [];
    punishmentListByID: [];
    error: string;
    loading: boolean;
}

const initialState: Punishment = {
    punishmentList: [],
    punishmentListByID: [],
    error: '',
    loading: false,
};

const PunishmentSlice = createSlice({
    name: 'punishment',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getPunishment.pending]: (state, action) => {
            state.loading = true;
        },
        [getPunishment.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.punishmentList = action.payload;
            console.log(state.punishmentList);
        },
        [getPunishment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getPunishmentByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getPunishmentByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.punishmentListByID = action.payload;
            console.log(state.punishmentListByID);
        },
        [getPunishmentByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postPunishment.pending]: (state, action) => {
            state.loading = true;
        },
        [postPunishment.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.PunishmentDetailList = action.payload;
            console.log(state.punishmentList);
        },
        [postPunishment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putPunishment.pending]: (state, action) => {
            state.loading = true;
        },
        [putPunishment.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.PunishmentDetailList = action.payload;
            console.log(state.punishmentList);
        },
        [putPunishment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default PunishmentSlice.reducer;
