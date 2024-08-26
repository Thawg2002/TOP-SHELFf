import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slides/counterSlider";
export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});
