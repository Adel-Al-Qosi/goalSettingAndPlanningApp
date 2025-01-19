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
      state.entries.push({
        text: action.payload,
        id: state.entries.length + 1,
      });
      state.unfilteredEntries.push({
        text: action.payload,
        id: state.unfilteredEntries.length + 1,
      });
    },
    
  },
});

export const { loadIdeas, addIdea } = ideasSlice.actions;

export default ideasSlice.reducer;