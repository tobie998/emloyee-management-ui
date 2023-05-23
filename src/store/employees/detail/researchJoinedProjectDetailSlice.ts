import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_RESEARCH_JOINED_PROJECT } from '../../../constant/api';

export const getResearchJoinedProjectDetail: any = createAsyncThunk(
    'researchJoinedProjectDetail/getResearchJoinedProjectDetail',
    async () => {
        try {
            const response = await axios.get(API_RESEARCH_JOINED_PROJECT);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const getResearchJoinedProjectDetailByID: any = createAsyncThunk(
    'researchJoinedProjectDetail/getResearchJoinedProjectDetailByID',
    async (data: any) => {
        const { maDeTai, maCanBo } = data;
        try {
            const response = await axios.get(`${API_RESEARCH_JOINED_PROJECT}/${maDeTai}/${maCanBo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postResearchJoinedProjectDetail: any = createAsyncThunk(
    'researchJoinedProjectDetail/postResearchJoinedProjectDetail',
    async (data: any) => {
        try {
            const response = await axios.post(API_RESEARCH_JOINED_PROJECT, data);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const putResearchJoinedProjectDetail: any = createAsyncThunk(
    'researchJoinedProjectDetail/putResearchJoinedProjectDetail',
    async (data: any) => {
        const { maDeTai, maCanBo } = data;
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_RESEARCH_JOINED_PROJECT}/${maDeTai}/${maCanBo}`,
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

export const deleteResearchJoinedProjectDetail: any = createAsyncThunk(
    'researchJoinedProjectDetail/deleteResearchJoinedProjectDetail',
    async (data: any) => {
        const { maDeTai, maCanBo } = data;
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_RESEARCH_JOINED_PROJECT}/${maDeTai}/${maCanBo}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface ResearchJoinedProjectDetail {
    researchJoinedProjectDetailList: [];
    researchJoinedProjectDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: ResearchJoinedProjectDetail = {
    researchJoinedProjectDetailList: [],
    researchJoinedProjectDetailListByID: [],
    error: '',
    loading: false,
};

const ResearchJoinedProjectDetailSlice = createSlice({
    name: 'researchJoinedProjectDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getResearchJoinedProjectDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchJoinedProjectDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchJoinedProjectDetailList = action.payload;
            console.log(state.researchJoinedProjectDetailList);
        },
        [getResearchJoinedProjectDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getResearchJoinedProjectDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchJoinedProjectDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchJoinedProjectDetailListByID = action.payload;
            console.log(state.researchJoinedProjectDetailListByID);
        },
        [getResearchJoinedProjectDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postResearchJoinedProjectDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postResearchJoinedProjectDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.researchJoinedProjectDetailList);
        },
        [postResearchJoinedProjectDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putResearchJoinedProjectDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putResearchJoinedProjectDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.researchJoinedProjectDetailList);
        },
        [putResearchJoinedProjectDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default ResearchJoinedProjectDetailSlice.reducer;
