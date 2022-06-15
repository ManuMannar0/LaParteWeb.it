import { IRootState } from "../rootReducer"

export const menuRoutesSelector = (state: IRootState) => state.menu.items
export const isMenuRouteLoadingSelector = (state:IRootState) => state.menu.isRouteLoading
export const isMenuRouteErrorSelector = (state: IRootState) => state.menu.isRouteError
export const isMenuRouteSuccessSelector = (state: IRootState) => state.menu.isRouteSuccess
