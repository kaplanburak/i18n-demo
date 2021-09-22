import { createSlice } from "@reduxjs/toolkit";

import { ICommonSlice } from "./ICommonSlice";

const initialState: ICommonSlice.InitialState = {
    theme: "light",
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setThemeLight: (state) => {
            state.theme = "light";
        },
        setThemeDark: (state) => {
            state.theme = "dark";
        },
    },
});

export const { setThemeDark, setThemeLight } = commonSlice.actions;

export default commonSlice.reducer;
