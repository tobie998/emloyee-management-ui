import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_TRAINING_PROCESS_DETAIL } from '../../../constant/api';

export const getTrainingProcessDetail: any = createAsyncThunk('trainingProcessDetail/getTrainingProcessDetail', async () => {
    try {
        const response = await axios.get(API_TRAINING_PROCESS_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getTrainingProcessDetailByID: any = createAsyncThunk(
    'trainingProcessDetail/getTrainingProcessDetailByID',
    async (data: any) => {
    const { mabacdaotao, macanbo } = data;

        try {
            const response = await axios.get(`${API_TRAINING_PROCESS_DETAIL}/${mabacdaotao}/${macanbo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postTrainingProcessDetail: any = createAsyncThunk('trainingProcessDetail/postTrainingProcessDetail', async (data: any) => {
    try {
        const response = await axios.post(API_TRAINING_PROCESS_DETAIL, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putTrainingProcessDetail: any = createAsyncThunk('trainingProcessDetail/putTrainingProcessDetail', async (data: any) => {
    const { maBacDaoTao, maCanBo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_TRAINING_PROCESS_DETAIL}/${maBacDaoTao}/${maCanBo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteTrainingProcessDetail: any = createAsyncThunk(
    'trainingProcessDetail/deleteTrainingProcessDetail',
    async (data: any) => {
        const { mabacdaotao, macanbo } = data;
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_TRAINING_PROCESS_DETAIL}/${mabacdaotao}/${macanbo}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface TrainingProcessDetail {
    trainingProcessDetailList: [];
    trainingProcessDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: TrainingProcessDetail = {
    trainingProcessDetailList: [],
    trainingProcessDetailListByID: [],
    error: '',
    loading: false,
};

const TrainingProcessDetailSlice = createSlice({
    name: 'trainingProcessDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getTrainingProcessDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getTrainingProcessDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.trainingProcessDetailList = action.payload;
            console.log(state.trainingProcessDetailList);
        },
        [getTrainingProcessDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getTrainingProcessDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getTrainingProcessDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.trainingProcessDetailListByID = action.payload;
            console.log(state.trainingProcessDetailListByID);
        },
        [getTrainingProcessDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postTrainingProcessDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postTrainingProcessDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.TrainingProcessDetailDetailList = action.payload;
            console.log(state.trainingProcessDetailList);
        },
        [postTrainingProcessDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putTrainingProcessDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putTrainingProcessDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.TrainingProcessDetailDetailList = action.payload;
            console.log(state.trainingProcessDetailList);
        },
        [putTrainingProcessDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default TrainingProcessDetailSlice.reducer;
