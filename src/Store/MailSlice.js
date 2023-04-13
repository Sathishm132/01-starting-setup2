import {createSlice} from "@reduxjs/toolkit"
const initialState={inboxmail:[],outbox:[],mailtype:"Inbox"}
const MailSlice=createSlice({
    name:"mail",
    initialState:initialState,
    reducers:{
        repalcemail(state,action){
        state.inboxmail=action.payload

        },
        replaceoutemail(state,action){
            state.outbox=action.payload
            console.log(action.payload)
        },
        mailtype(state,action){
            state.mailtype=action.payload
            console.log(state.mailtype)
        }

       
            
    }                 
    
})
export const mailaction=MailSlice.actions
export default MailSlice