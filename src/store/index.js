import { configureStore } from "@reduxjs/toolkit";
import ideasReducer from "./reducers/ideas";

const store = configureStore({
  reducer: {
    ideas: ideasReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;