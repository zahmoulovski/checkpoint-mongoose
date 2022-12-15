import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";

export default configureStore({
    reducer:{
        contact:contactsSlice
    }
})