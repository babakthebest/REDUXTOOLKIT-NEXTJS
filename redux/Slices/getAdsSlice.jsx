import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ads: [],
  error: {},
  hasMore: true,
  loading: true,
};
const getAdsSlice = createSlice({
  name: "getAds",
  initialState: initialState,
  reducers: {
    getAds: (state, action) => {
      state.ads = state.ads.concat(action.payload);
    },
    getError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const getAdsAsync = (req, page) => async (dispatch) => {
  try {
    // const { origin } = absoluteUrl(req);
    const { data } = await axios.get(
      `http://127.0.0.1:8000/pollads/?page=${page}`
    );
    dispatch(getAds(data.results));
  } catch (ex) {
    dispatch(getError(ex.response.data));
  }
};

export const { getAds, getError } = getAdsSlice.actions;
export default getAdsSlice.reducer;
