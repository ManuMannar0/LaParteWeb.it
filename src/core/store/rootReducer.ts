import { combineReducers } from "redux";
import menu from "./menu/slice"
import posts from "./posts/slice";
import pages from "./pages/slice";
import THE_BLOG_RootReducer from "THE_BLOG/THE_BLOG_RootReducer";


export const rootReducer = combineReducers({
    menu: menu.reducer,
    posts: posts.reducer,
    pages: pages.reducer,
    ...THE_BLOG_RootReducer,
})

export type IRootState = ReturnType<typeof rootReducer>