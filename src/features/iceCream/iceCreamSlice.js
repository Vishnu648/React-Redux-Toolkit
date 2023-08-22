import { createSlice } from '@reduxjs/toolkit'

// const { cakeActions } = require('../cake/cakeSlice').default
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restoked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers:{
    //     ['cake/ordered']:(state) => {  //old version
    //         state.numOfIceCreams -- 
    //       }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {     //current version
            state.numOfIceCreams--;
        });
    },
    // extraReducers: (builder) => {
    //     builder.addCase('cake/ordered', (state) => {     //current version withtout importing cakeActions
    //         state.numOfIceCreams--;
    //     });
    // },
})

export default iceCreamSlice.reducer
export const {ordered,restoked} = iceCreamSlice.actions