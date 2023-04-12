import { configureStore } from "@reduxjs/toolkit";
import MailSlice from "./MailSlice";

const store=configureStore({
reducer:MailSlice.reducer
})
export default store;