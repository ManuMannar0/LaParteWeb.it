import { Route, Routes, Navigate } from "react-router-dom";
import { pathHome, pathCategory, pathPage, pathPost, pathCustom, pathHelp} from "./settings/settings";
import Logo from "./site/Logo/Logo";
import Header from "./site/Header/Header";
import Home from "./site/Home/Home";
import Category from "./site/Category/Category";
import Page from "./site/Page/Page";
import Post from "./site/Post/Post";
import Custom from "./site/Custom/Custom";
import Menu from "./site/Menu/Menu";
import { ICustomizeSite } from "./model/model";
import Footer from "./site/Footer/Footer";
import { useDispatch } from "react-redux";
import { FETCH_POSTS_BEGIN, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from "./store/posts/actions";
import { API_menuRoutes, API_pagesArchive, API_postsArchive } from "./settings/API/WPRestAPI";
import { FETCH_MENUROUTES_BEGIN, FETCH_MENUROUTES_FAILURE, FETCH_MENUROUTES_SUCCESS } from "./store/menu/actions";
import { GlobalStyle } from "THE_BLOG/THE_BLOG_GlobalStyle";
import { FETCH_PAGES_BEGIN, FETCH_PAGES_FAILURE, FETCH_PAGES_SUCCESS } from "./store/pages/actions";
import Help from "./site/Help/Help";

const Root = ({custom}: {custom: ICustomizeSite}) => {                                                      
    const dispatch = useDispatch()
    
    dispatch(FETCH_MENUROUTES_BEGIN())
    // fetch(API_menuRoutes)
    //     .then(resp => resp.json())
    //     .then(json => dispatch(FETCH_MENUROUTES_SUCCESS(json.items)))
    //     .catch(error => dispatch(FETCH_MENUROUTES_FAILURE(true)))
        
    dispatch(FETCH_POSTS_BEGIN())
    fetch(API_postsArchive)
        .then(resp => resp.json())
        .then(json => dispatch(FETCH_POSTS_SUCCESS(json)))
        .catch(error => dispatch(FETCH_POSTS_FAILURE(true)))
    
    dispatch(FETCH_PAGES_BEGIN())
    fetch(API_pagesArchive)
        .then(resp => resp.json())
        .then(json => dispatch(FETCH_PAGES_SUCCESS(json)))
        .catch(error => dispatch(FETCH_PAGES_FAILURE(true)))

    return(
        <>
            <GlobalStyle />
            <main>
                <Logo custom={custom.logo} />
                <Header custom={custom.header} />
                <Menu custom={custom.menu} />
                <Routes>
                    <Route path={pathHome} element={<Home custom={custom.home} />} />
                    <Route path={pathCategory} element={<Category custom={custom.category} /> } />
                    <Route path={pathPage} element={<Page custom={custom.page} /> } />
                    <Route path={pathPost} element={<Post custom={custom.post} /> } />
                    <Route path={pathCustom} element={<Custom custom={custom.custom} /> } />
                    <Route path={pathHelp} element={<Help custom={custom.help} /> } />
                    <Route path="*" element={<Navigate to={pathHome} />} />
                </Routes>
            </main>
            <Footer custom={custom.footer} /> 
        </>
    )
}

export default Root

