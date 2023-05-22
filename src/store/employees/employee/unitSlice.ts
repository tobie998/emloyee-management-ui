import axios from '../../../plugins/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_UNIT } from '../../../constant/api';

export const getUnit: any = createAsyncThunk('unit/getUnit', async () => {
    try {
        const response = await axios.get(API_UNIT);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const getUnitByID: any = createAsyncThunk('unit/getUnitByID', async (madonvi: any) => {
    try {
        const response = await axios.get(`${API_UNIT}/${madonvi}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const postUnit: any = createAsyncThunk('unit/postUnit', async (data: any) => {
    try {
        const response = await axios.post(API_UNIT, data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const putUnit: any = createAsyncThunk('unit/putUnit', async (data: any) => {
    const { madonvi } = data;
    try {
        const response = await axios({
            method: 'PUT',
            url: `${API_UNIT}/${madonvi}`,
            data: data,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

export const deleteUnit: any = createAsyncThunk('unit/deleteUnit', async (madonvi: any) => {
    try {
        const response = await axios({
            method: 'DELETE',
            url: `${API_UNIT}/${madonvi}`,
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('err', err);
        return err;
    }
});

interface Unit {
    unitList: [];
    unitListByID: [];
    error: string;
    loading: boolean;
}

const initialState: Unit = {
    unitList: [],
    unitListByID: [],
    error: '',
    loading: false,
};

const UnitSlice = createSlice({
    name: 'unit',
    initialState,
    reducers: {},
    extraReducers: {
        // GET
        [getUnit.pending]: (state, action) => {
            state.loading = true;
        },
        [getUnit.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.unitList = action.payload;
            console.log(state.unitList);
        },
        [getUnit.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // GET BY ID
        [getUnitByID.pending]: (state, action) => {
            state.loading = true;
        },
        [getUnitByID.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            state.unitListByID = action.payload;
            console.log(state.unitListByID);
        },
        [getUnitByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // POST
        [postUnit.pending]: (state, action) => {
            state.loading = true;
        },
        [postUnit.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.UnitDetailList = action.payload;
            console.log(state.unitList);
        },
        [postUnit.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // PUT
        [putUnit.pending]: (state, action) => {
            state.loading = true;
        },
        [putUnit.fulfilled]: (state, action) => {
            console.log(action);
            state.loading = false;
            // state.UnitDetailList = action.payload;
            console.log(state.unitList);
        },
        [putUnit.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export default UnitSlice.reducer;
