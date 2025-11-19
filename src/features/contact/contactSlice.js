import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    message: null,
    success: false,

};
export const contactMe = createAsyncThunk('contact/contactMe', async (formDetails, { rejectWithValue }) => {
    try {
        const config = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post('/api/v1/contact', formDetails, config);
        console.log(data)
        return{ data,formDetails};

    } catch (error) {
        return rejectWithValue(error.response?.data || 'an error occured while trying sending email please try again ');

    }
})
// contact slice
const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        removeErrors: (state, _) => {
            state.error = null;
        },
        removeSuccess: (state, _) => {
            state.success = false;
        },
        removeMessage: (state, _) => {
            state.message = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(contactMe.pending, (state, _action) => {
                state.loading = true;
                state.error = false;

            })
            .addCase(contactMe.fulfilled, (state, action) => {
                console.log('fullfilled res', action.meta.arg);
                const {email}=action.meta.arg;
                state.loading = false;
                state.error = null;
                state.message = action.payload?.data?.message || `essage sent successfully to ${email}`;
                state.success=action.payload?.data.success;
            })
            .addCase(contactMe.rejected, (state, action) => {
                state.error = action.payload?.data?.message || 'an error occured while sending message ';
                state.loading = false;
            })
    }

})
export const { removeErrors, removeSuccess, removeMessage } = contactSlice.actions;
export default contactSlice.reducer;