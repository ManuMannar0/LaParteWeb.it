import { createSlice } from "@reduxjs/toolkit";

export type IHomepage = {
  isPostVisible: boolean
  bkgColor: string
  content: any
}

const initialState: IHomepage = {
  isPostVisible: false,
  bkgColor: 'default',
  content: undefined,
};

const homepage = createSlice({
  name: 'homepage',
  initialState: initialState,
  reducers: {
    SET_ISPOSTVISIBLE: (state, action) => {
      state.isPostVisible = action.payload
    },
    SET_BKGCOLOR: (state, action) => {
      state.bkgColor = action.payload
    },
    SET_CONTENT: (state, action) => {
      state.content = action.payload
    },
  }
})

export default homepage