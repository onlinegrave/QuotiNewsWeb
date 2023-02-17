import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Category, CountryCode, LanguageCode } from "../services/types";

// Define a type for the slice state
interface AppState {
  showTopAppBar: boolean;
  language: LanguageCode;
  country: CountryCode;
  everything: {
    category: Category;
  };
  category: Category;
  headlines: {
    country: CountryCode;
    category: Category;
    pageSize: number;
    page: number;
  };
}

// Define the initial state using that type
const initialState: AppState = {
  showTopAppBar: true,
  language: "en",
  country: "us",
  category: Category.technology,
  everything: {
    category: Category.technology,
  },
  headlines: {
    country: "us",
    category: Category.technology,
    pageSize: 10,
    page: 1,
  },
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.language = action.payload;
    },
    changeCountry: (state, action: PayloadAction<CountryCode>) => {
      state.country = action.payload;
    },
    showTopAppBar: (state) => {
      state.showTopAppBar = true;
    },
    hideTopAppBar: (state) => {
      state.showTopAppBar = false;
    },
    setCategory: (state, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
    setEverythingCategory: (state, action: PayloadAction<Category>) => {
      state.everything.category = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setShowTopAppBar: (state, action: PayloadAction<boolean>) => {
      state.showTopAppBar = action.payload;
    },
    setHeadlinesCategory: (state, action: PayloadAction<Category>) => {
      state.headlines.category = action.payload;
    },
  },
});

export const {
  showTopAppBar,
  hideTopAppBar,
  setShowTopAppBar,
  setHeadlinesCategory,
  changeCountry,
  changeLanguage,
  setCategory,
  setEverythingCategory
} = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectShowTopAppBar = (state: RootState) =>
  state.app.showTopAppBar;

export default appSlice.reducer;
