import { createSlice } from "@reduxjs/toolkit";

export type IPage = any

export type IPages = {
  items: IPage[]
  isPageLoading: boolean
  isPageError: boolean
  isPageSuccess: boolean
}
const initialState: IPages = {
  items: [],
  isPageLoading: false,
  isPageError: false,
  isPageSuccess: false,
};

const pages = createSlice({
  name: 'pages',
  initialState: initialState,
  reducers: {
      FETCH_PAGES_BEGIN: (state) => {
          state.isPageLoading = true;
          state.isPageError = false;
          state.isPageSuccess = false;
      },
      FETCH_PAGES_SUCCESS: (state, action) => {
          state.items = action.payload
          state.isPageLoading = false;
          state.isPageError = false;
          state.isPageSuccess = true;
      },
      FETCH_PAGES_FAILURE: (state, action) => {
          state.isPageLoading = false;
          state.isPageError = action.payload.isPagesError;
          state.isPageSuccess = false;
      },
  }
})

export default pages