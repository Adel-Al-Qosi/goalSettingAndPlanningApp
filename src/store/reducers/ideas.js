import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: [],
  unfilteredEntries: [],
  isLoading: true,
};

const ideasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    loadIdeas: (state, action) => {
      state.entries = action.payload;
      state.unfilteredEntries = action.payload;
      state.isLoading = false;
    },
    addIdea: (state, action) => {
      state.entries.push(action.payload);
      state.unfilteredEntries.push(action.payload);
    },
    
  },
});

export const { loadIdeas, addIdea } = ideasSlice.actions;

export default ideasSlice.reducer;