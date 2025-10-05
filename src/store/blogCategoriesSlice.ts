import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WPTag } from "../types/wordpress";
import { WPTermTag } from "../types/wordpress";

interface BlogCategoriesState {
  selectedTag: WPTag | WPTermTag | null;
}

const initialState: BlogCategoriesState = {
  selectedTag: null,
};

const blogCategoriesSlice = createSlice({
  name: "blogCategories",
  initialState,
  reducers: {
    setSelectedTag(state, action: PayloadAction<WPTag | WPTermTag | null>) {
      state.selectedTag = action.payload;
    },
  },
});

export const { setSelectedTag } = blogCategoriesSlice.actions;
export default blogCategoriesSlice.reducer;
