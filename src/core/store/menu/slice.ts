import { createSlice } from "@reduxjs/toolkit";

export type IMenuForMenu = any

export type IMenu = {
  items: IMenuForMenu[]
  isRouteLoading: boolean
  isRouteError: boolean
  isRouteSuccess: boolean
}
const initialState: IMenu = {
  items: [],
  isRouteLoading: false,
  isRouteError: false,
  isRouteSuccess: false,
};

const menu = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
      FETCH_MENUROUTES_BEGIN: (state) => {
          state.isRouteLoading = true;
          state.isRouteError = false;
          state.isRouteSuccess = false;
      },
      FETCH_MENUROUTES_FAILURE: (state, action) => {
        state.isRouteLoading = false;
        state.isRouteError = action.payload;
        state.isRouteSuccess = false;
      },
      FETCH_MENUROUTES_SUCCESS: (state, action) => {
          state.isRouteLoading = false;
          state.isRouteError = false;
          state.isRouteSuccess = true;
          state.items = action.payload
      },
  }
})

export default menu