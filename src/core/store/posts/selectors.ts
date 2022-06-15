import { IRootState } from "../rootReducer"

export const postsSelector = (state: IRootState) => state.posts.items
export const isPostLoadingSelector = (state:IRootState) => state.posts.isPostLoading
export const isPostErrorSelector = (state: IRootState) => state.posts.isPostError
export const isPostSuccessSelector = (state: IRootState) => state.posts.isPostSuccess