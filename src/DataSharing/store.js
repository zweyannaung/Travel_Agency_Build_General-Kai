import { configureStore } from "@reduxjs/toolkit";
import DataCenter from "./DataCenter";

export const store = configureStore({
    reducer : {
        dataCenter : DataCenter,
    }
})