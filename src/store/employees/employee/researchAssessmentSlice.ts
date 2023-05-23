import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_RESEARCH_ASSESSMENT } from '../../../constant/api';

export const getResearchAssessment: any = createAsyncThunk('researchAssessment/getResearchAssessment', async () => {
    try {
        const response = await axios.get(API_RESEARCH_ASSESSMENT);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getResearchAssessmentByID: any = createAsyncThunk(
    'researchAssessment/getResearchAssessmentByID',
    async (mahinhthuchoidong: any) => {
        try {
            const response = await axios.get(`${API_RESEARCH_ASSESSMENT}/${mahinhthuchoidong}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postResearchAssessment: any = createAsyncThunk(
    'researchAssessment/postResearchAssessment',
    async (data: any) => {
        try {
            const response = await axios.post(API_RESEARCH_ASSESSMENT, data);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const putResearchAssessment: any = createAsyncThunk(
    'researchAssessment/putResearchAssessment',
    async (data: any) => {
        const { maHinhThucHoiDong } = data;
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_RESEARCH_ASSESSMENT}/${maHinhThucHoiDong}`,
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

export const deleteResearchAssessment: any = createAsyncThunk(
    'researchAssessment/deleteResearchAssessment',
    async (mahinhthuchoidong: any) => {
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_RESEARCH_ASSESSMENT}/${mahinhthuchoidong}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface ResearchAssessment {
    researchAssessmentList: [];
    researchAssessmentListByID: [];
    error: string;
    loading: boolean;
}

const initialState: ResearchAssessment = {
    researchAssessmentList: [],
    researchAssessmentListByID: [],
    error: '',
    loading: false,
};

const ResearchAssessmentSlice = createSlice({
    name: 'researchAssessment',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getResearchAssessment.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchAssessment.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchAssessmentList = action.payload;
            console.log(state.researchAssessmentList);
        },
        [getResearchAssessment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getResearchAssessmentByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchAssessmentByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchAssessmentListByID = action.payload;
            console.log(state.researchAssessmentListByID);
        },
        [getResearchAssessmentByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postResearchAssessment.pending]: (state, action) => {
            state.loading = true;
        },
        [postResearchAssessment.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchAssessmentDetailList = action.payload;
            console.log(state.researchAssessmentList);
        },
        [postResearchAssessment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putResearchAssessment.pending]: (state, action) => {
            state.loading = true;
        },
        [putResearchAssessment.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchAssessmentDetailList = action.payload;
            console.log(state.researchAssessmentList);
        },
        [putResearchAssessment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default ResearchAssessmentSlice.reducer;
