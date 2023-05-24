import { IRootState } from "core/store/rootReducer";

export const isPostVisibleSelector = (state: IRootState) => state.homepage.isPostVisible
export const bkgColorSelector = (state: IRootState) => state.homepage.bkgColor
export const contentSelector = (state: IRootState) => state.homepage.content

