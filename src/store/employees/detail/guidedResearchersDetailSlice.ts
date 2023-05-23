import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_GUIDED_RESEARCHERS } from '../../../constant/api';

export const getGuidedResearcherDetail: any = createAsyncThunk(
    'guidedResearcherDetail/getGuidedResearcherDetail',
    async () => {
        try {
            const response = await axios.get(API_GUIDED_RESEARCHERS);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const getGuidedResearcherDetailByID: any = createAsyncThunk(
    'guidedResearcherDetail/getGuidedResearcherDetailByID',
    async (data: any) => {
        const { maNCS, maCanBo } = data;
        try {
            const response = await axios.get(`${API_GUIDED_RESEARCHERS}/${maNCS}/${maCanBo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postGuidedResearcherDetail: any = createAsyncThunk(
    'guidedResearcherDetail/postGuidedResearcherDetail',
    async (data: any) => {
        try {
            const response = await axios.post(API_GUIDED_RESEARCHERS, data);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const putGuidedResearcherDetail: any = createAsyncThunk(
    'guidedResearcherDetail/putGuidedResearcherDetail',
    async (data: any) => {
        const { maNCS, maCanBo } = data;
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_GUIDED_RESEARCHERS}/${maNCS}/${maCanBo}`,
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

export const deleteGuidedResearcherDetail: any = createAsyncThunk(
    'guidedResearcherDetail/deleteGuidedResearcherDetail',
    async (data: any) => {
        const { maNCS, maCanBo } = data;
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_GUIDED_RESEARCHERS}/${maNCS}/${maCanBo}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface GuidedResearcherDetail {
    guidedResearcherDetailList: [];
    guidedResearcherDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: GuidedResearcherDetail = {
    guidedResearcherDetailList: [],
    guidedResearcherDetailListByID: [],
    error: '',
    loading: false,
};

const GuidedResearcherDetailSlice = createSlice({
    name: 'guidedResearcherDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getGuidedResearcherDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getGuidedResearcherDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.guidedResearcherDetailList = action.payload;
            console.log(state.guidedResearcherDetailList);
        },
        [getGuidedResearcherDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getGuidedResearcherDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getGuidedResearcherDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.guidedResearcherDetailListByID = action.payload;
            console.log(state.guidedResearcherDetailListByID);
        },
        [getGuidedResearcherDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postGuidedResearcherDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postGuidedResearcherDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.guidedResearcherDetailList);
        },
        [postGuidedResearcherDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putGuidedResearcherDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putGuidedResearcherDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.guidedResearcherDetailList);
        },
        [putGuidedResearcherDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default GuidedResearcherDetailSlice.reducer;
