import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errors:null,
    rentalInfo:{}

};

export const trackingSlice = createSlice({
    name: "rentalInfo",
    initialState: initialState,
    reducers: {
        catchError: (state, action) => {
            state.error= action.payload.error
        },
        rentalInfoFetched:(state,action)=>{
            state.listVhicles=action.payload.rentalInfo
            state.errors= action.payload.error
        }
    }
    
});