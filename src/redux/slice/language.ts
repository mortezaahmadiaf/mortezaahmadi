import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILanguageState {
  name: "en" | "fa";
  font: "vazir-regular-font" | "gotham-Light-font";
  direction: "ltr" | "rtl";
}

const initialState: ILanguageState = {
  direction: "ltr",
  font: "gotham-Light-font",
  name: "en",
};

const languages = {
  en: { direction: "ltr", font: "gotham-Light-font", name: "en" },
  fa: { direction: "rtl", font: "vazir-regular-font", name: "fa" },
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changelang: (state, action: PayloadAction<string>) => {
      state = languages[action.payload];
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changelang } = languageSlice.actions;

export default languageSlice.reducer;
