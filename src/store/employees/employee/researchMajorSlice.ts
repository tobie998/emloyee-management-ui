import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_RESEARCH_MAJOR } from '../../../constant/api';

export const getResearchMajor: any = createAsyncThunk('researchMajor/getResearchMajor', async () => {
    try {
        const response = await axios.get(API_RESEARCH_MAJOR);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getResearchMajorByID: any = createAsyncThunk('researchMajor/getResearchMajorByID', async (data: any) => {
    const { malinhvuc, machuyennganh } = data;
    try {
        const response = await axios.get(`${API_RESEARCH_MAJOR}/${malinhvuc}/${machuyennganh}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postResearchMajor: any = createAsyncThunk('researchMajor/postResearchMajor', async (data: any) => {
    try {
        const response = await axios.post(API_RESEARCH_MAJOR, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putResearchMajor: any = createAsyncThunk('researchMajor/putResearchMajor', async (data: any) => {
    const { maLinhVuc, maChuyenNganh } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_RESEARCH_MAJOR}/${maLinhVuc}/${maChuyenNganh}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteResearchMajor: any = createAsyncThunk('researchMajor/deleteResearchMajor', async (data: any) => {
    const { malinhvuc, machuyennganh } = data;
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_RESEARCH_MAJOR}/${malinhvuc}/${machuyennganh}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface ResearchMajor {
    researchMajorList: [];
    researchMajorListByID: [];
    error: string;
    loading: boolean;
}

const initialState: ResearchMajor = {
    researchMajorList: [],
    researchMajorListByID: [],
    error: '',
    loading: false,
};

const ResearchMajorSlice = createSlice({
    name: 'researchMajor',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getResearchMajor.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchMajor.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchMajorList = action.payload;
            console.log(state.researchMajorList);
        },
        [getResearchMajor.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getResearchMajorByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchMajorByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchMajorListByID = action.payload;
            console.log(state.researchMajorListByID);
        },
        [getResearchMajorByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postResearchMajor.pending]: (state, action) => {
            state.loading = true;
        },
        [postResearchMajor.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchMajorDetailList = action.payload;
            console.log(state.researchMajorList);
        },
        [postResearchMajor.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putResearchMajor.pending]: (state, action) => {
            state.loading = true;
        },
        [putResearchMajor.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchMajorDetailList = action.payload;
            console.log(state.researchMajorList);
        },
        [putResearchMajor.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default ResearchMajorSlice.reducer;
