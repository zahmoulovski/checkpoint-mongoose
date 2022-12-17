import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const contactSlice = createSlice({
  name: "contact",
  initialState: [
    {
      id: uuidv4(),
      firstname: "initialState",
      name: "initialState",
      description: "initialState",
      age: 33,
      phone: "initialState",
      email: "initialState",
    },
  ],
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newContact];
    },

    setContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addContact, setContacts } = contactSlice.actions;

export default contactSlice.reducer;
