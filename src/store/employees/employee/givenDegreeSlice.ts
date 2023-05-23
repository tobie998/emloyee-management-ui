import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_GIVEN_DEGREE } from '../../../constant/api';

export const getGivenDegree: any = createAsyncThunk('givenDegree/getGivenDegree', async () => {
    try {
        const response = await axios.get(API_GIVEN_DEGREE);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getGivenDegreeByID: any = createAsyncThunk('givenDegree/getGivenDegreeByID', async (mavanbang: any) => {
    try {
        const response = await axios.get(`${API_GIVEN_DEGREE}/${mavanbang}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postGivenDegree: any = createAsyncThunk('givenDegree/postGivenDegree', async (data: any) => {
    try {
        const response = await axios.post(API_GIVEN_DEGREE, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putGivenDegree: any = createAsyncThunk('givenDegree/putGivenDegree', async (data: any) => {
    const { maVanBang } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_GIVEN_DEGREE}/${maVanBang}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteGivenDegree: any = createAsyncThunk('givenDegree/deleteGivenDegree', async (mavanbang: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_GIVEN_DEGREE}/${mavanbang}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface GivenDegree {
    givenDegreeList: [];
    givenDegreeListByID: [];
    error: string;
    loading: boolean;
}

const initialState: GivenDegree = {
    givenDegreeList: [],
    givenDegreeListByID: [],
    error: '',
    loading: false,
};

const GivenDegreeSlice = createSlice({
    name: 'givenDegree',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getGivenDegree.pending]: (state, action) => {
            state.loading = true;
        },
        [getGivenDegree.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.givenDegreeList = action.payload;
            console.log(state.givenDegreeList);
        },
        [getGivenDegree.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getGivenDegreeByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getGivenDegreeByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.givenDegreeListByID = action.payload;
            console.log(state.givenDegreeListByID);
        },
        [getGivenDegreeByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postGivenDegree.pending]: (state, action) => {
            state.loading = true;
        },
        [postGivenDegree.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.givenDegreeList);
        },
        [postGivenDegree.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putGivenDegree.pending]: (state, action) => {
            state.loading = true;
        },
        [putGivenDegree.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.givenDegreeList);
        },
        [putGivenDegree.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default GivenDegreeSlice.reducer;
