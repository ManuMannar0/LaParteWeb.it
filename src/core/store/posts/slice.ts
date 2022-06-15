import { createSlice } from "@reduxjs/toolkit";

export type IPost = any

export type IPosts = {
  items: IPost[]
  isPostLoading: boolean
  isPostError: boolean
  isPostSuccess: boolean
}
const initialState: IPosts = {
  items: [],
  isPostLoading: false,
  isPostError: false,
  isPostSuccess: false,
};

const posts = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
      FETCH_POSTS_BEGIN: (state) => {
          state.isPostLoading = true;
          state.isPostError = false;
          state.isPostSuccess = false;
      },
      FETCH_POSTS_SUCCESS: (state, action) => {
          state.items = action.payload
          state.isPostLoading = false;
          state.isPostError = false;
          state.isPostSuccess = true;
      },
      FETCH_POSTS_FAILURE: (state, action) => {
          state.isPostLoading = false;
          state.isPostError = action.payload.isPostError;
          state.isPostSuccess = false;
      },
  }
})

export default posts