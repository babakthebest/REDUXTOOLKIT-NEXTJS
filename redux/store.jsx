import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import counterReducer from "./Slices/counterSlise";
import getAdReducer from "./Slices/getAdsSlice";

const combinReducer = combineReducers({
  counter: counterReducer,
  getAds: getAdReducer,
});
/*
export const store = configureStore({
  reducer: { counter: counterReducer },
});
*/
const reducers = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinReducer(state, action);
  }
};

const makeStore = () =>
  configureStore({
    reducer: reducers,
  });

export const wrapper = createWrapper(makeStore);
