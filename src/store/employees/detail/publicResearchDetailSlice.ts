import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_PUBLIC_RESEARCH_DETAIL } from '../../../constant/api';

export const getPublicResearchDetail: any = createAsyncThunk(
    'publicResearchDetail/getPublicResearchDetail',
    async () => {
        try {
            const response = await axios.get(API_PUBLIC_RESEARCH_DETAIL);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const getPublicResearchDetailByID: any = createAsyncThunk(
    'publicResearchDetail/getPublicResearchDetailByID',
    async (data: any) => {
        const { maNCS, maCanBo } = data;
        try {
            const response = await axios.get(`${API_PUBLIC_RESEARCH_DETAIL}/${maNCS}/${maCanBo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postPublicResearchDetail: any = createAsyncThunk(
    'publicResearchDetail/postPublicResearchDetail',
    async (data: any) => {
        try {
            const response = await axios.post(API_PUBLIC_RESEARCH_DETAIL, data);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const putPublicResearchDetail: any = createAsyncThunk(
    'publicResearchDetail/putPublicResearchDetail',
    async (data: any) => {
        const { maNCS, maCanBo } = data;
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_PUBLIC_RESEARCH_DETAIL}/${maNCS}/${maCanBo}`,
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

export const deletePublicResearchDetail: any = createAsyncThunk(
    'publicResearchDetail/deletePublicResearchDetail',
    async (data: any) => {
        const { maNCS, maCanBo } = data;
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_PUBLIC_RESEARCH_DETAIL}/${maNCS}/${maCanBo}`,
            });
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

interface PublicResearchDetail {
    publicResearchDetailList: [];
    publicResearchDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: PublicResearchDetail = {
    publicResearchDetailList: [],
    publicResearchDetailListByID: [],
    error: '',
    loading: false,
};

const PublicResearchDetailSlice = createSlice({
    name: 'publicResearchDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getPublicResearchDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getPublicResearchDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.publicResearchDetailList = action.payload;
            console.log(state.publicResearchDetailList);
        },
        [getPublicResearchDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getPublicResearchDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getPublicResearchDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.publicResearchDetailListByID = action.payload;
            console.log(state.publicResearchDetailListByID);
        },
        [getPublicResearchDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postPublicResearchDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postPublicResearchDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.publicResearchDetailList);
        },
        [postPublicResearchDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putPublicResearchDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putPublicResearchDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.publicResearchDetailList);
        },
        [putPublicResearchDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default PublicResearchDetailSlice.reducer;
