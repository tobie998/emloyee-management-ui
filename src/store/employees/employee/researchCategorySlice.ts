import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_RESEARCH_CATEGORY } from '../../../constant/api';

export const getResearchCategory: any = createAsyncThunk('researchCategory/getResearchCategory', async () => {
    try {
        const response = await axios.get(API_RESEARCH_CATEGORY);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getResearchCategoryByID: any = createAsyncThunk(
    'researchCategory/getResearchCategoryByID',
    async (malinhvuc: any) => {
        try {
            const response = await axios.get(`${API_RESEARCH_CATEGORY}/${malinhvuc}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log('err', err);
            return err;
        }
    },
);

export const postResearchCategory: any = createAsyncThunk('researchCategory/postResearchCategory', async (data: any) => {
    try {
        const response = await axios.post(API_RESEARCH_CATEGORY, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putResearchCategory: any = createAsyncThunk('researchCategory/putResearchCategory', async (data: any) => {
    const { maLinhVuc } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_RESEARCH_CATEGORY}/${maLinhVuc}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteResearchCategory: any = createAsyncThunk('researchCategory/deleteResearchCategory', async (malinhvuc: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_RESEARCH_CATEGORY}/${malinhvuc}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface ResearchCategory {
    researchCategoryList: [];
    researchCategoryListByID: [];
    error: string;
    loading: boolean;
}

const initialState: ResearchCategory = {
    researchCategoryList: [],
    researchCategoryListByID: [],
    error: '',
    loading: false,
};

const ResearchCategorySlice = createSlice({
    name: 'researchCategory',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getResearchCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchCategory.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchCategoryList = action.payload;
            console.log(state.researchCategoryList);
        },
        [getResearchCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getResearchCategoryByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getResearchCategoryByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.researchCategoryListByID = action.payload;
            console.log(state.researchCategoryListByID);
        },
        [getResearchCategoryByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postResearchCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [postResearchCategory.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchCategoryDetailList = action.payload;
            console.log(state.researchCategoryList);
        },
        [postResearchCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putResearchCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [putResearchCategory.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.ResearchCategoryDetailList = action.payload;
            console.log(state.researchCategoryList);
        },
        [putResearchCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default ResearchCategorySlice.reducer;
