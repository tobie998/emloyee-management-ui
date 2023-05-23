import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_RESEARCH_ASSESSMENT_DETAIL } from '../../../constant/api';

export const getResearchAssessmentDetail: any = createAsyncThunk('researchAssessmentDetail/getResearchAssessmentDetail', async () => {
    try {
        const response = await axios.get(API_RESEARCH_ASSESSMENT_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getResearchAssessmentDetailByID: any = createAsyncThunk(
    'researchAssessmentDetail/getResearchAssessmentDetailByID',
    async (data: any) => {
        const { mahinhthuchoidong, macanbo } = data;

        try {
            const response = await axios.get(`${API_RESEARCH_ASSESSMENT_DETAIL}/${mahinhthuchoidong}/${macanbo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postResearchAssessmentDetail: any = createAsyncThunk(
    'researchAssessmentDetail/postResearchAssessmentDetail',
    async (data: any) => {
        try {
            const response = await axios.post(API_RESEARCH_ASSESSMENT_DETAIL, data);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const putResearchAssessmentDetail: any = createAsyncThunk(
    'researchAssessmentDetail/putResearchAssessmentDetail',
    async (data: any) => {
        const { mahinhthuchoidong, macanbo } = data;
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_RESEARCH_ASSESSMENT_DETAIL}/${mahinhthuchoidong}/${macanbo}`,
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

export const deleteResearchAssessmentDetail: any = createAsyncThunk(
    'researchAssessmentDetail/deleteResearchAssessmentDetail',
    async (data: any) => {
        const { mahinhthuchoidong, macanbo } = data;
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_RESEARCH_ASSESSMENT_DETAIL}/${mahinhthuchoidong}/${macanbo}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface ResearchAssessmentDetail {
    ResearchAssessmentDetailList: [];
    ResearchAssessmentDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: ResearchAssessmentDetail = {
    ResearchAssessmentDetailList: [],
    ResearchAssessmentDetailListByID: [],
    error: '',
    loading: false,
};

const ResearchAssessmentDetailSlice = createSlice({
    name: 'ResearchAssessmentDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getResearchAssessmentDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchAssessmentDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.ResearchAssessmentDetailList = action.payload;
            console.log(state.ResearchAssessmentDetailList);
        },
        [getResearchAssessmentDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getResearchAssessmentDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchAssessmentDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.ResearchAssessmentDetailListByID = action.payload;
            console.log(state.ResearchAssessmentDetailListByID);
        },
        [getResearchAssessmentDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postResearchAssessmentDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postResearchAssessmentDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchAssessmentDetailDetailList = action.payload;
            console.log(state.ResearchAssessmentDetailList);
        },
        [postResearchAssessmentDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putResearchAssessmentDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putResearchAssessmentDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchAssessmentDetailDetailList = action.payload;
            console.log(state.ResearchAssessmentDetailList);
        },
        [putResearchAssessmentDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default ResearchAssessmentDetailSlice.reducer;
