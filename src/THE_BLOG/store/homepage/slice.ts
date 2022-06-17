import { createSlice } from "@reduxjs/toolkit";

export type IHomepage = {
  isPostVisible: boolean
  content: any
}

const initialState: IHomepage = {
  isPostVisible: false,
  content: undefined,
};

const homepage = createSlice({
  name: 'homepage',
  initialState: initialState,
  reducers: {
    SET_ISPOSTVISIBLE: (state, action) => {
      state.isPostVisible = action.payload
    },
    SET_CONTENT: (state, action) => {
      state.content = action.payload
    },
  }
})

export default homepage