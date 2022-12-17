import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const contactSlice = createSlice({
  name: "contact",
  initialState: [
    {
      id: uuidv4(),
      name: "zahmoulovski",
      age: 30,
      email: "zahmoulovski@gmail.com",
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
