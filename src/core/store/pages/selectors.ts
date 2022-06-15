import { IRootState } from "../rootReducer"

export const pagesSelector = (state: IRootState) => state.pages.items
export const isPageLoadingSelector = (state:IRootState) => state.pages.isPageLoading
export const isPageErrorSelector = (state: IRootState) => state.pages.isPageError
export const isPageSuccessSelector = (state: IRootState) => state.pages.isPageSuccess