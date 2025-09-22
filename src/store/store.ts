import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import blogCategoriesReducer from "./blogCategoriesSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    blogCategories: blogCategoriesReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
