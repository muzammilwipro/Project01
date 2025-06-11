import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";

const store = configureStore({
  reducer: reducer
    // Add your reducers here
  })
export default store;