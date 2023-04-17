import { configureStore } from "@reduxjs/toolkit";
import restaReducer from "./features/RestaSlice";


const myStore = configureStore({
    reducer:{

        restaReducer,


    }
})


export default myStore