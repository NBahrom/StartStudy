import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WPCategory } from "../types/wordpress";
export type Language = "ru" | "en" | "cz";

interface LanguageState {
  current: Language;
  categoryMap: Partial<Record<Language, number>>;
  categories: WPCategory[];   
  loading: boolean;
  languages: Language[];
}

const initialState: LanguageState = {
  current: "ru",
  categoryMap: {},
  categories: [],
  languages: ["ru", "en", "cz"],
  loading: false,
};


//Async thunk to fetch categories from Wordpress
export const fetchCategories = createAsyncThunk(
  "language/fetchCategories",
  async () => {
    const res = await fetch("https://blog.startstudy.cz/wp-json/wp/v2/categories");
    const data = await res.json();
    return data; // full category list
  }
);

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        
        // Map WP categories to language slugs
        const categoryMap: Partial<Record<Language, number>> = {};
        action.payload.forEach((cat: any) => {
          if (["ru", "en", "cz"].includes(cat.slug)) {
            categoryMap[cat.slug as Language] = cat.id;
          }
        });
        state.categoryMap = categoryMap;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
