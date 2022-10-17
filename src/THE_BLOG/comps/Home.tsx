import { useDispatch, useSelector } from "react-redux";
import ModalLoader from "core/components/ModalLoader/ModalLoader"
import { isPageErrorSelector, isPageLoadingSelector, isPageSuccessSelector, pagesSelector } from "core/store/pages/selectors"
import { isPostErrorSelector, isPostLoadingSelector, isPostSuccessSelector, postsSelector } from "core/store/posts/selectors"
import { replaceUnicode } from "core/features/strings";
import styled from "styled-components";
import { IPost } from "core/store/posts/slice";
import { IPage } from "core/store/pages/slice";
import { useWidthWindowSize } from "core/features/device";
import { v4 as uuidv4 } from 'uuid';
import { contentSelector, isPostVisibleSelector } from "THE_BLOG/store/homepage/selectors";
import { SET_CONTENT, SET_ISPOSTVISIBLE } from "THE_BLOG/store/homepage/actions";
import Loading from "./Loading";
import $ from 'jquery'
import { the_blog_title } from "THE_BLOG/THE_BLOG_Settings";
import BackgroundVideo from "./BackGroundVideo";
import HiddenImagesForMeta from "./HiddenImagesForMeta";


type ITitles = {
    post: any,
    index: number,
    title: any,
}

const StyledTitle = styled.a<{
    ismobile: boolean,
}>`
    position: relative;
    cursor: pointer;
    line-height: 1;
    margin: 3px;
    /* filter: drop-shadow(white 0px 0px 7px); */
`
const StyledSuperButtons = styled.div<{
    ismobile: boolean,
}>`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    font-size: ${props => props.ismobile ? '3rem' : '4rem'};
    cursor: pointer;
    line-height: 1;
    margin: 3px;
    gap: 1rem;
    /* filter: drop-shadow(white 0px 0px 7px); */
    
    div {
        width: ${props => props.ismobile ? '3rem' : '4rem'};
        height: ${props => props.ismobile ? '3rem' : '4rem'};
        text-align: center;
        border-radius: 3rem;
        border: 1px solid white;
    }
`
const StyledPostContent = styled.div<{
    ispostvisible: boolean,
}>`
    display: ${props => props.ispostvisible ? 'block' : 'none'};
    color: black;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    right: 0;
    opacity: 0.7;
    z-index: 2;
    overflow: scroll;

    p {
        padding: 1rem 1rem 0 1rem;

        br {
            display: none;
        }
    }

`
const StyledPageSections = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    gap: 2rem;
`

const StyledTopPage = styled.div<{
    ismobile: boolean
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
    z-index: 1;
`
const StyledTopSXPage = styled.div`
    flex: 3;
    font-size: clamp(1.4rem, 2vw, 2.5rem);
`
const StyledBottomPage = styled.h1<{
    ismobile: boolean
}>`
    z-index: 1;
    padding: 1rem;
    font-size: clamp(1.9rem, 6vw, 4rem);
`
const StyledLogo = styled.h5`
    text-transform: uppercase;
`

const Title = (props: ITitles) => {
    const dispatch = useDispatch()
    const isMobile = useWidthWindowSize() >= 1024 ? false : true

    const toggleClick = () => {
        $(`body`).css("overflow", "hidden")
        dispatch(SET_CONTENT(props.post))
        dispatch(SET_ISPOSTVISIBLE(true))
    }

    const unicodeNum = (index: number) => {
        switch (index) {
            case 1:
                return "❶"
            case 2:
                return "❷"
            case 3:
                return "❸"
            case 4:
                return "❹"
            case 5:
                return "❺"
            case 6:
                return "❻"
            case 7:
                return "❼"
            case 8:
                return "❽"
            case 9:
                return "❾"
            default:
                return "#"
        }
    }

    return(
        <StyledTitle
            className="StyledTitle"
            key={uuidv4()}
            ismobile={isMobile}
            onClick={() => toggleClick()}
        >
            {unicodeNum(props.index)} {replaceUnicode(props.title)}
        </StyledTitle>
    )
}

const Home = () => {    
    const dispatch = useDispatch()

    const isPostSuccess = useSelector(isPostSuccessSelector)
    const isPageSuccess = useSelector(isPageSuccessSelector)
    const isPostLoading = useSelector(isPostLoadingSelector)
    const isPageLoading = useSelector(isPageLoadingSelector)
    const isPostError = useSelector(isPostErrorSelector)
    const isPageError = useSelector(isPageErrorSelector)
    
    const posts = useSelector(postsSelector)
    const page = useSelector(pagesSelector)

    const isPostVisible = useSelector(isPostVisibleSelector)
    const isMobile = useWidthWindowSize() >= 768 ? false : true
    const content = useSelector(contentSelector)

    const toggleClick = () => {
        $(`body`).css("overflow", "visible")
        dispatch(SET_ISPOSTVISIBLE(false))
    }

    return(
        <>
            <StyledPostContent 
                id="StyledPostContent"
                ispostvisible={isPostVisible}
                onClick={() => toggleClick()}
                dangerouslySetInnerHTML={{ __html: content }} 
            />

            <StyledPageSections id="StyledPageSections">
                <ModalLoader 
                    loading={isPostLoading && isPageLoading}
                    error={isPostError && isPageError }
                    success={isPostSuccess && isPageSuccess}
                    componentOnLoading={<Loading />}
                    componentOnError={<></>}
                    componentOnSuccess={
                        <>
                            <StyledTopPage 
                                id="StyledTopPage"
                                ismobile={isMobile}
                            >
                                <StyledTopSXPage 
                                    id="StyledTopSXPage" 
                                >
                                    <StyledLogo id="StyledLogo">{the_blog_title}</StyledLogo>
                                    {page.map((post: IPage) => <div id="dangerouslySetInnerHTML" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />)}
                                </StyledTopSXPage>
                            </StyledTopPage>
                            
                            <StyledBottomPage 
                                id="StyledBottomPage"
                                ismobile={isMobile}
                            >
                                {
                                    posts.map((post: IPost, index: number) => {
                                        return(
                                            <Title
                                                key={uuidv4()}
                                                index={index+1}
                                                post={post.content.rendered}
                                                title={replaceUnicode(post.title.rendered.toUpperCase())}
                                            />
                                        )
                                    }
                                )}
                            </StyledBottomPage>
                        </>
                    }
                />
            </StyledPageSections>

            <HiddenImagesForMeta />
            <BackgroundVideo />
        </>
    )
}

export default Home