import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import navToggler from "../features/navState/navStateSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggler: navToggler,
  },
});
