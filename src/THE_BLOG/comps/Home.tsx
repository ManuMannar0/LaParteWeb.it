import { useDispatch, useSelector } from "react-redux";
import ModalLoader from "core/components/ModalLoader/ModalLoader"
import { isMenuRouteSuccessSelector, menuRoutesSelector } from "core/store/menu/selectors"
import { isPageErrorSelector, isPageLoadingSelector, isPageSuccessSelector } from "core/store/pages/selectors"
import { isPostErrorSelector, isPostLoadingSelector, isPostSuccessSelector, postsSelector } from "core/store/posts/selectors"
import BackGroundVideo from "./BackGroundVideo";
import { replaceUnicode } from "core/features/strings";
import styled from "styled-components";
import { IPost } from "core/store/posts/slice";
import { useWidthWindowSize } from "core/features/device";
import { v4 as uuidv4 } from 'uuid';
import { contentSelector, isPostVisibleSelector } from "THE_BLOG/store/homepage/selectors";
import { SET_CONTENT, SET_ISPOSTVISIBLE } from "THE_BLOG/store/homepage/actions";
import Loading from "./Loading";
import $ from 'jquery'

type IHomePost = {
    post: any
    title: any,
}

const StyledLiTitle = styled.li<{
    islititlevisible: boolean,
    ismobile: boolean,
}>`
    display: flex;
    visibility: ${props => props.islititlevisible ? 'visible' : 'hidden'};
    position: relative;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    height: 100vh;
    align-items: ${props => props.ismobile ? 'center' : 'flex-start'};
    margin-left: ${props => props.ismobile ? '1rem' : '10vw'};
    margin-right: ${props => props.ismobile && '1rem'};
`
const StyledTitle = styled.h1`
    color: white;
    font-size: 4rem;
    cursor: pointer;
    filter: drop-shadow(white 0px 0px 7px);
    text-align: center;
`
const StyledPostContent = styled.div<{
    ispostvisible: boolean,
    ismobile: boolean,
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
    z-index: 1;
    overflow: scroll;

    p {
        font-size: 2rem;
        padding: 1rem 1rem 0 1rem;
        text-align: ${props => props.ismobile && 'center'};

        br {
            display: none;
        }
    }

`
const LiTitle = (props: IHomePost) => {
    const dispatch = useDispatch()
    const isPostVisible = useSelector(isPostVisibleSelector)
    const isMobile = useWidthWindowSize() >= 1024 ? false : true

    const toggleClick = () => {
        $(`body`).css("overflow", "hidden")
        dispatch(SET_CONTENT(props.post))
        dispatch(SET_ISPOSTVISIBLE(true))
    }

    return(
        <StyledLiTitle
            key={uuidv4()}
            islititlevisible={!isPostVisible}
            ismobile={isMobile}
        >
            <StyledTitle
                onClick={() => toggleClick()}
            >
                {replaceUnicode(props.title)}
            </StyledTitle>
        </StyledLiTitle>
    )
}

const HomePost = (props: IHomePost) => <LiTitle key={uuidv4()} post={props.post} title={props.title}/>

const Home = () => {    
    const dispatch = useDispatch()
    const posts = useSelector(postsSelector)
    const isMenuRouteSuccess = useSelector(isMenuRouteSuccessSelector)
    const isPostSuccess = useSelector(isPostSuccessSelector)
    const isPageSuccess = useSelector(isPageSuccessSelector)
    const isPostLoading = useSelector(isPostLoadingSelector)
    const isPageLoading = useSelector(isPageLoadingSelector)
    const isMenuLoading = useSelector(isPageLoadingSelector)
    const isPostError = useSelector(isPostErrorSelector)
    const isPageError = useSelector(isPageErrorSelector)
    const isMenuError = useSelector(isPageErrorSelector)

    const isPostVisible = useSelector(isPostVisibleSelector)
    const isMobile = useWidthWindowSize() >= 1024 ? false : true
    const content = useSelector(contentSelector)

    const toggleClick = () => {
        $(`body`).css("overflow", "visible")
        dispatch(SET_ISPOSTVISIBLE(false))
    }

    return(
        <>
            <section>
                <StyledPostContent 
                    ispostvisible={isPostVisible}
                    ismobile={isMobile}
                    onClick={() => toggleClick()}
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            </section>
            <ModalLoader 
                loading={isPostLoading && isPageLoading && isMenuLoading}
                error={isPostError && isPageError && isMenuError}
                success={isPostSuccess && isPageSuccess && isMenuRouteSuccess}
                componentOnLoading={<Loading />}
                componentOnError={<></>}
                componentOnSuccess={
                    <>
                        {
                            posts.map((post: IPost) => {
                                return(
                                    <HomePost 
                                        post={post.content.rendered}
                                        title={replaceUnicode(post.title.rendered.toUpperCase())}
                                    />
                                )
                            }
                        )}
                    </>
                }
            />
            <BackGroundVideo />
        </>
    )
}

export default Home