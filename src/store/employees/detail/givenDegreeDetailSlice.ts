import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_GIVEN_DEGREE_DETAIL} from '../../../constant/api';

export const getGivenDegreeDetail: any = createAsyncThunk('givenDegreeDetail/getGivenDegreeDetail', async () => {
    try {
        const response = await axios.get(API_GIVEN_DEGREE_DETAIL);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getGivenDegreeDetailByID: any = createAsyncThunk('givenDegreeDetail/getGivenDegreeDetailByID', async (data: any) => {
    const { mavanbang, macanbo } = data;
    try {
        const response = await axios.get(`${API_GIVEN_DEGREE_DETAIL}/${mavanbang}/${macanbo}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postGivenDegreeDetail: any = createAsyncThunk('givenDegreeDetail/postGivenDegreeDetail', async (data: any) => {
    try {
        const response = await axios.post(API_GIVEN_DEGREE_DETAIL, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putGivenDegreeDetail: any = createAsyncThunk('givenDegreeDetail/putGivenDegreeDetail', async (data: any) => {
    const { maVanBang, maCanBo } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_GIVEN_DEGREE_DETAIL}/${maVanBang}/${maCanBo}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteGivenDegreeDetail: any = createAsyncThunk('givenDegreeDetail/deleteGivenDegreeDetail', async (data: any) => {
    const { mavanbang, macanbo } = data;
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_GIVEN_DEGREE_DETAIL}/${mavanbang}/${macanbo}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface GivenDegreeDetail {
    GivenDegreeDetailList: [];
    GivenDegreeDetailListByID: [];
    error: string;
    loading: boolean;
}

const initialState: GivenDegreeDetail = {
    GivenDegreeDetailList: [],
    GivenDegreeDetailListByID: [],
    error: '',
    loading: false,
};

const GivenDegreeDetailSlice = createSlice({
    name: 'givenDegreeDetail',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getGivenDegreeDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [getGivenDegreeDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.GivenDegreeDetailList = action.payload;
            console.log(state.GivenDegreeDetailList);
        },
        [getGivenDegreeDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getGivenDegreeDetailByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getGivenDegreeDetailByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.GivenDegreeDetailListByID = action.payload;
            console.log(state.GivenDegreeDetailListByID);
        },
        [getGivenDegreeDetailByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postGivenDegreeDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [postGivenDegreeDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.GivenDegreeDetailList);
        },
        [postGivenDegreeDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putGivenDegreeDetail.pending]: (state, action) => {
            state.loading = true;
        },
        [putGivenDegreeDetail.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.employeeDetailList = action.payload;
            console.log(state.GivenDegreeDetailList);
        },
        [putGivenDegreeDetail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default GivenDegreeDetailSlice.reducer;
