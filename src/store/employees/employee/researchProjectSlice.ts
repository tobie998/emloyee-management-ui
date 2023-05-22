import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_RESEARCH_PROJECT } from '../../../constant/api';

export const getResearchProject: any = createAsyncThunk('researchProject/getResearchProject', async () => {
    try {
        const response = await axios.get(API_RESEARCH_PROJECT);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getResearchProjectByID: any = createAsyncThunk(
    'researchProject/getResearchProjectByID',
    async (madetai: any) => {
        try {
            const response = await axios.get(`${API_RESEARCH_PROJECT}/${madetai}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postResearchProject: any = createAsyncThunk('researchProject/postResearchProject', async (data: any) => {
    try {
        const response = await axios.post(API_RESEARCH_PROJECT, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putResearchProject: any = createAsyncThunk('researchProject/putResearchProject', async (data: any) => {
    const { madetai } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_RESEARCH_PROJECT}/${madetai}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteResearchProject: any = createAsyncThunk('researchProject/deleteResearchProject', async (madetai: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_RESEARCH_PROJECT}/${madetai}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface ResearchProject {
    researchProjectList: [];
    researchProjectListByID: [];
    error: string;
    loading: boolean;
}

const initialState: ResearchProject = {
    researchProjectList: [],
    researchProjectListByID: [],
    error: '',
    loading: false,
};

const ResearchProjectSlice = createSlice({
    name: 'researchProject',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getResearchProject.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchProject.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchProjectList = action.payload;
            console.log(state.researchProjectList);
        },
        [getResearchProject.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getResearchProjectByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchProjectByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchProjectListByID = action.payload;
            console.log(state.researchProjectListByID);
        },
        [getResearchProjectByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postResearchProject.pending]: (state, action) => {
            state.loading = true;
        },
        [postResearchProject.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchProjectDetailList = action.payload;
            console.log(state.researchProjectList);
        },
        [postResearchProject.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putResearchProject.pending]: (state, action) => {
            state.loading = true;
        },
        [putResearchProject.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchProjectDetailList = action.payload;
            console.log(state.researchProjectList);
        },
        [putResearchProject.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default ResearchProjectSlice.reducer;
