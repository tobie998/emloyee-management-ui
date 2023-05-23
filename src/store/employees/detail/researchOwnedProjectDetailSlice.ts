import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_RESEARCH_OWNED_PROJECT } from '../../../constant/api';

export const getResearchOwnedProjectDetail: any = createAsyncThunk(
    'researchOwnedProjectDetail/getResearchOwnedProjectDetail',
    async () => {
        try {
            const response = await axios.get(API_RESEARCH_OWNED_PROJECT);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const getResearchOwnedProjectDetailByID: any = createAsyncThunk(
    'researchOwnedProjectDetail/getResearchOwnedProjectDetailByID',
    async (data: any) => {
        const { maDeTai, maCanBo } = data;
        try {
            const response = await axios.get(`${API_RESEARCH_OWNED_PROJECT}/${maDeTai}/${maCanBo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postResearchOwnedProjectDetail: any = createAsyncThunk(
    'researchOwnedProjectDetail/postResearchOwnedProjectDetail',
    async (data: any) => {
        try {
            const response = await axios.post(API_RESEARCH_OWNED_PROJECT, data);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const putResearchOwnedProjectDetail: any = createAsyncThunk(
    'researchOwnedProjectDetail/putResearchOwnedProjectDetail',
    async (data: any) => {
        const { maDeTai, maCanBo } = data;
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_RESEARCH_OWNED_PROJECT}/${maDeTai}/${maCanBo}`,
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

export const deleteResearchOwnedProjectDetail: any = createAsyncThunk(
    'researchOwnedProjectDetail/deleteResearchOwnedProjectDetail',
    async (data: any) => {
        const { maDeTai, maCanBo } = data;
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_RESEARCH_OWNED_PROJECT}/${maDeTai}/${maCanBo}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface ResearchOwnedProjectDetail {
    researchOwnedProjectDetailList: [];
    researchOwnedProjectDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: ResearchOwnedProjectDetail = {
    researchOwnedProjectDetailList: [],
    researchOwnedProjectDetailListByID: [],
    error: '',
    loading: false,
};

const ResearchOwnedProjectDetailSlice = createSlice({
    name: 'researchOwnedProjectDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getResearchOwnedProjectDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchOwnedProjectDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchOwnedProjectDetailList = action.payload;
            console.log(state.researchOwnedProjectDetailList);
        },
        [getResearchOwnedProjectDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getResearchOwnedProjectDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchOwnedProjectDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchOwnedProjectDetailListByID = action.payload;
            console.log(state.researchOwnedProjectDetailListByID);
        },
        [getResearchOwnedProjectDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postResearchOwnedProjectDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postResearchOwnedProjectDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.researchOwnedProjectDetailList);
        },
        [postResearchOwnedProjectDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putResearchOwnedProjectDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putResearchOwnedProjectDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.researchOwnedProjectDetailList);
        },
        [putResearchOwnedProjectDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default ResearchOwnedProjectDetailSlice.reducer;
