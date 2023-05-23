import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_LANGUAGE_KNOWLEDGE_DETAIL } from '../../../constant/api';

export const getLanguageKnowledgeDetail: any = createAsyncThunk('languageKnowledgeDetail/getLanguageKnowledgeDetail', async () => {
    try {
        const response = await axios.get(API_LANGUAGE_KNOWLEDGE_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getLanguageKnowledgeDetailByID: any = createAsyncThunk(
    'LanguageKnowledgeDetail/getLanguageKnowledgeDetailByID',
    async (data: any) => {
    const { mangoaingu, maCanBo } = data;
        try {
            const response = await axios.get(`${API_LANGUAGE_KNOWLEDGE_DETAIL}/${mangoaingu}/${maCanBo}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postLanguageKnowledgeDetail: any = createAsyncThunk('languageKnowledgeDetail/postLanguageKnowledgeDetail', async (data: any) => {
    try {
        const response = await axios.post(API_LANGUAGE_KNOWLEDGE_DETAIL, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putLanguageKnowledgeDetail: any = createAsyncThunk('languageKnowledgeDetail/putLanguageKnowledgeDetail', async (data: any) => {
    const { maNgoaiNgu, maCanBo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_LANGUAGE_KNOWLEDGE_DETAIL}/${maNgoaiNgu}/${maCanBo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteLanguageKnowledgeDetail: any = createAsyncThunk('languageKnowledgeDetail/deleteLanguageKnowledgeDetail', async (data: any) => {
    const { mangoaingu, maCanBo } = data;
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_LANGUAGE_KNOWLEDGE_DETAIL}/${mangoaingu}/${maCanBo}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface LanguageKnowledgeDetail {
    LanguageKnowledgeDetailList: [];
    LanguageKnowledgeDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: LanguageKnowledgeDetail = {
    LanguageKnowledgeDetailList: [],
    LanguageKnowledgeDetailListByID: [],
    error: '',
    loading: false,
};

const LanguageKnowledgeDetailSlice = createSlice({
    name: 'LanguageKnowledgeDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getLanguageKnowledgeDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getLanguageKnowledgeDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.LanguageKnowledgeDetailList = action.payload;
            console.log(state.LanguageKnowledgeDetailList);
        },
        [getLanguageKnowledgeDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getLanguageKnowledgeDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getLanguageKnowledgeDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.LanguageKnowledgeDetailListByID = action.payload;
            console.log(state.LanguageKnowledgeDetailListByID);
        },
        [getLanguageKnowledgeDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postLanguageKnowledgeDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postLanguageKnowledgeDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.LanguageKnowledgeDetailDetailList = action.payload;
            console.log(state.LanguageKnowledgeDetailList);
        },
        [postLanguageKnowledgeDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putLanguageKnowledgeDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putLanguageKnowledgeDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.LanguageKnowledgeDetailDetailList = action.payload;
            console.log(state.LanguageKnowledgeDetailList);
        },
        [putLanguageKnowledgeDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default LanguageKnowledgeDetailSlice.reducer;
