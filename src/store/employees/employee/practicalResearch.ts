import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_PRACTICAL_RESEARCH } from '../../../constant/api';

export const getPracticalResearch: any = createAsyncThunk('PracticalResearch/getPracticalResearch', async () => {
    try {
        const response = await axios.get(API_PRACTICAL_RESEARCH);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getPracticalResearchByID: any = createAsyncThunk(
    'PracticalResearch/getPracticalResearchByID',
    async (data: any) => {
        const { macongtrinhnghiencuu, macanbo } = data;
        try {
            const response = await axios.get(`${API_PRACTICAL_RESEARCH}/${macongtrinhnghiencuu}/${macanbo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postPracticalResearch: any = createAsyncThunk(
    'PracticalResearch/postPracticalResearch',
    async (data: any) => {
        try {
            const response = await axios.post(API_PRACTICAL_RESEARCH, data);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const putPracticalResearch: any = createAsyncThunk(
    'PracticalResearch/putPracticalResearch',
    async (data: any) => {
        const { macongtrinhnghiencuu, macanbo } = data;
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_PRACTICAL_RESEARCH}/${macongtrinhnghiencuu}/${macanbo}`,
                data: data,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const deletePracticalResearch: any = createAsyncThunk(
    'PracticalResearch/deletePracticalResearch',
    async (data: any) => {
        const { macongtrinhnghiencuu, macanbo } = data;
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_PRACTICAL_RESEARCH}/${macongtrinhnghiencuu}/${macanbo}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface PracticalResearch {
    practicalResearchList: [];
    practicalResearchListByID: [];
    error: string;
    loading: boolean;
}

const initialState: PracticalResearch = {
    practicalResearchList: [],
    practicalResearchListByID: [],
    error: '',
    loading: false,
};

const PracticalResearchSlice = createSlice({
    name: 'practicalResearch',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getPracticalResearch.pending]: (state, action) => {
            state.loading = true;
        },
        [getPracticalResearch.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.practicalResearchList = action.payload;
            console.log(state.practicalResearchList);
        },
        [getPracticalResearch.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getPracticalResearchByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getPracticalResearchByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.practicalResearchListByID = action.payload;
            console.log(state.practicalResearchListByID);
        },
        [getPracticalResearchByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postPracticalResearch.pending]: (state, action) => {
            state.loading = true;
        },
        [postPracticalResearch.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.PracticalResearchDetailList = action.payload;
            console.log(state.practicalResearchList);
        },
        [postPracticalResearch.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putPracticalResearch.pending]: (state, action) => {
            state.loading = true;
        },
        [putPracticalResearch.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.PracticalResearchDetailList = action.payload;
            console.log(state.practicalResearchList);
        },
        [putPracticalResearch.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default PracticalResearchSlice.reducer;
