import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_TRAINING_PROCESS } from '../../../constant/api';

export const getTrainingProcess: any = createAsyncThunk('trainingProcess/getTrainingProcess', async () => {
    try {
        const response = await axios.get(API_TRAINING_PROCESS);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getTrainingProcessByID: any = createAsyncThunk(
    'trainingProcess/getTrainingProcessByID',
    async (mabacdaotao: any) => {
        try {
            const response = await axios.get(`${API_TRAINING_PROCESS}/${mabacdaotao}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postTrainingProcess: any = createAsyncThunk('trainingProcess/postTrainingProcess', async (data: any) => {
    try {
        const response = await axios.post(API_TRAINING_PROCESS, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putTrainingProcess: any = createAsyncThunk('trainingProcess/putTrainingProcess', async (data: any) => {
    const { maBacDaoTao } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_TRAINING_PROCESS}/${maBacDaoTao}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteTrainingProcess: any = createAsyncThunk(
    'trainingProcess/deleteTrainingProcess',
    async (mabacdaotao: any) => {
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_TRAINING_PROCESS}/${mabacdaotao}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface TrainingProcess {
    trainingProcessList: [];
    trainingProcessListByID: [];
    error: string;
    loading: boolean;
}

const initialState: TrainingProcess = {
    trainingProcessList: [],
    trainingProcessListByID: [],
    error: '',
    loading: false,
};

const TrainingProcessSlice = createSlice({
    name: 'trainingProcess',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getTrainingProcess.pending]: (state, action) => {
            state.loading = true;
        },
        [getTrainingProcess.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.trainingProcessList = action.payload;
            console.log(state.trainingProcessList);
        },
        [getTrainingProcess.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getTrainingProcessByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getTrainingProcessByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.trainingProcessListByID = action.payload;
            console.log(state.trainingProcessListByID);
        },
        [getTrainingProcessByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postTrainingProcess.pending]: (state, action) => {
            state.loading = true;
        },
        [postTrainingProcess.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.TrainingProcessDetailList = action.payload;
            console.log(state.trainingProcessList);
        },
        [postTrainingProcess.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putTrainingProcess.pending]: (state, action) => {
            state.loading = true;
        },
        [putTrainingProcess.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.TrainingProcessDetailList = action.payload;
            console.log(state.trainingProcessList);
        },
        [putTrainingProcess.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default TrainingProcessSlice.reducer;
