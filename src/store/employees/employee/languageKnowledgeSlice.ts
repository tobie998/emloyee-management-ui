import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_LANGUAGE_KNOWLEDGE } from '../../../constant/api';

export const getLanguageKnowledge: any = createAsyncThunk('languageKnowledge/getLanguageKnowledge', async () => {
    try {
        const response = await axios.get(API_LANGUAGE_KNOWLEDGE);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getLanguageKnowledgeByID: any = createAsyncThunk(
    'languageKnowledge/getLanguageKnowledgeByID',
    async (mangoaingu: any) => {
        try {
            const response = await axios.get(`${API_LANGUAGE_KNOWLEDGE}/${mangoaingu}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postLanguageKnowledge: any = createAsyncThunk('languageKnowledge/postLanguageKnowledge', async (data: any) => {
    try {
        const response = await axios.post(API_LANGUAGE_KNOWLEDGE, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putLanguageKnowledge: any = createAsyncThunk('languageKnowledge/putLanguageKnowledge', async (data: any) => {
    const { maNgoaiNgu } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_LANGUAGE_KNOWLEDGE}/${maNgoaiNgu}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteLanguageKnowledge: any = createAsyncThunk('languageKnowledge/deleteLanguageKnowledge', async (mangoaingu: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_LANGUAGE_KNOWLEDGE}/${mangoaingu}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface LanguageKnowledge {
    languageKnowledgeList: [];
    languageKnowledgeListByID: [];
    error: string;
    loading: boolean;
}

const initialState: LanguageKnowledge = {
    languageKnowledgeList: [],
    languageKnowledgeListByID: [],
    error: '',
    loading: false,
};

const LanguageKnowledgeSlice = createSlice({
    name: 'languageKnowledge',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getLanguageKnowledge.pending]: (state, action) => {
            state.loading = true;
        },
        [getLanguageKnowledge.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.languageKnowledgeList = action.payload;
            console.log(state.languageKnowledgeList);
        },
        [getLanguageKnowledge.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getLanguageKnowledgeByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getLanguageKnowledgeByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.languageKnowledgeListByID = action.payload;
            console.log(state.languageKnowledgeListByID);
        },
        [getLanguageKnowledgeByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postLanguageKnowledge.pending]: (state, action) => {
            state.loading = true;
        },
        [postLanguageKnowledge.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.LanguageKnowledgeDetailList = action.payload;
            console.log(state.languageKnowledgeList);
        },
        [postLanguageKnowledge.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putLanguageKnowledge.pending]: (state, action) => {
            state.loading = true;
        },
        [putLanguageKnowledge.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.LanguageKnowledgeDetailList = action.payload;
            console.log(state.languageKnowledgeList);
        },
        [putLanguageKnowledge.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default LanguageKnowledgeSlice.reducer;
