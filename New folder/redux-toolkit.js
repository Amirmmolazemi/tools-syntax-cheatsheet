import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// initial state
const initialState = {
  // something...
};

// create slice
const example = createSlice({
  name: "example",
  initialState,
  reducers: {
    exampleReducer: (state, action) => {
      // something...
    },
  },
});
export default example.reducer;
export const { exampleReducer } = example.actions;

// configure store with slice and slice Component
const exampleStore = configureStore({
  reducer: { sliceName: sliceComponent },
});

// provider that wrap into main.js
<Provider store={store}>
  <App />
</Provider>;

// use store
const store = useSelector((store) => store);

// use useDispatch
const dispatch = useDispatch();
dispatch(action());

// use middleware in redux

const exampleStoreWithMiddleware = configureStore({
  reducer: { sliceName: sliceComponent },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newMiddleware),
});
