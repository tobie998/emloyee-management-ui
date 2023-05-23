import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_PUNISHMENT_DETAIL} from '../../../constant/api';

export const getPunishmentDetail: any = createAsyncThunk('punishmentDetail/getPunishmentDetail', async () => {
    try {
        const response = await axios.get(API_PUNISHMENT_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getPunishmentDetailByID: any = createAsyncThunk(
    'PunishmentDetail/getPunishmentDetailByID',
    async (data: any) => {
    const { makyluat, macanbo } = data;

        try {
            const response = await axios.get(`${API_PUNISHMENT_DETAIL}/${makyluat}/${macanbo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postPunishmentDetail: any = createAsyncThunk('punishmentDetail/postPunishmentDetail', async (data: any) => {
    try {
        const response = await axios.post(API_PUNISHMENT_DETAIL, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putPunishmentDetail: any = createAsyncThunk('punishmentDetail/putPunishmentDetail', async (data: any) => {
    const { maKyLuat, maCanBo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_PUNISHMENT_DETAIL}/${maKyLuat}/${maCanBo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deletePunishmentDetail: any = createAsyncThunk('punishmentDetail/deletePunishmentDetail', async (data: any) => {
    const { makyluat, macanbo } = data;
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_PUNISHMENT_DETAIL}/${makyluat}/${macanbo}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface PunishmentDetail {
    PunishmentDetailList: [];
    PunishmentDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: PunishmentDetail = {
    PunishmentDetailList: [],
    PunishmentDetailListByID: [],
    error: '',
    loading: false,
};

const PunishmentDetailSlice = createSlice({
    name: 'PunishmentDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getPunishmentDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getPunishmentDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.PunishmentDetailList = action.payload;
            console.log(state.PunishmentDetailList);
        },
        [getPunishmentDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getPunishmentDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getPunishmentDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.PunishmentDetailListByID = action.payload;
            console.log(state.PunishmentDetailListByID);
        },
        [getPunishmentDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postPunishmentDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postPunishmentDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.PunishmentDetailDetailList = action.payload;
            console.log(state.PunishmentDetailList);
        },
        [postPunishmentDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putPunishmentDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putPunishmentDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.PunishmentDetailDetailList = action.payload;
            console.log(state.PunishmentDetailList);
        },
        [putPunishmentDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default PunishmentDetailSlice.reducer;
