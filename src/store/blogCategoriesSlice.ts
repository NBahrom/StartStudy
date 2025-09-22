import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WPTag } from "../types/wordpress";

interface BlogCategoriesState {
  selectedTag: WPTag | null;
}

const initialState: BlogCategoriesState = {
  selectedTag: null,
};

const blogCategoriesSlice = createSlice({
  name: "blogCategories",
  initialState,
  reducers: {
    setSelectedTag(state, action: PayloadAction<WPTag | null>) {
      state.selectedTag = action.payload;
    },
  },
});

export const { setSelectedTag } = blogCategoriesSlice.actions;
export default blogCategoriesSlice.reducer;
