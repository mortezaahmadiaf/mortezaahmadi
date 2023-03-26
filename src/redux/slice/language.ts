import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILanguageState {
  lang: "en" | "fa";
  font: "vazir";
  direction: "ltr" | "rtl";
}

const initialState: ILanguageState = {
  direction: "ltr",
  font: "vazir",
  lang: "en",
};

const languages = {
  en: { direction: "ltr", font: "vazir", lang: "en" },
  fa: { direction: "rtl", font: "vazir", lang: "fa" },
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
