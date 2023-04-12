import {createSlice} from "@reduxjs/toolkit"
const initialState={inboxmail:[]}
const MailSlice=createSlice({
    name:"mail",
    initialState:initialState,
    reducers:{
        repalcemail(state,action){
        state.inboxmail=action.payload

        }
    }
})
export const mailaction=MailSlice.actions
export default MailSlice