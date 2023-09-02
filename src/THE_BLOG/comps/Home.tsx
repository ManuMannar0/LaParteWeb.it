import { useDispatch, useSelector } from "react-redux";
import ModalLoader from "core/components/ModalLoader/ModalLoader"
import { pagesSelector } from "core/store/pages/selectors"
import { isPostErrorSelector, isPostLoadingSelector, isPostSuccessSelector, postsSelector } from "core/store/posts/selectors"
import { replaceUnicode } from "core/features/strings";
import styled from "styled-components";
import { IPost } from "core/store/posts/slice";
import { useWidthWindowSize } from "core/features/device";
import { v4 as uuidv4 } from 'uuid';
import { bkgColorSelector, contentSelector, isPostVisibleSelector } from "THE_BLOG/store/homepage/selectors";
import { SET_CONTENT, SET_ISPOSTVISIBLE } from "THE_BLOG/store/homepage/actions";
import $ from 'jquery';
import { regataScript_alt, regataScript_landing, the_blog_title } from "THE_BLOG/THE_BLOG_Settings";
import BkgVideo from "./BkgVideo";
import BkgImage from "./BkgImage";
import Whatsapp from "./Whatsapp";
import Mail from "./Mail";
import regataLogo from "../imgs/regataLogo.png"
import MenuButton from "./MenuButton";

type ITitles = {
    post: any,
    index: number,
    title: any,
    bkgColor?: string,
}

const StyledTitle = styled.a<{
    ismobile: boolean,
}>`
    position: relative;
    cursor: pointer;
    line-height: 1;
    margin: 3px;
`
const StyledSuperButtons = styled.a<{
    ismobile: boolean,
}>`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: ${props => props.ismobile ? '3rem' : '4rem'};
    cursor: pointer;
    line-height: 1;
    margin: 3px;
    gap: 1rem;
    
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
    bkgcolor?: string,
}>`
    display: ${props => props.ispostvisible ? 'block' : 'none'};
    color: white;
    background-color: #114b7a;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    right: 0;
    opacity: 0.95;
    z-index: 2;
    overflow: scroll;
    font-size: 1.5rem;

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
    justify-content: space-between;
    padding: 1rem;
    z-index: 1;
    gap: 3rem;
`
const StyledTopSXPage = styled.div`
    p {
        font-size: 1.5rem;
    }
`
const StyledTopDXPage = styled.div`
    display: flex;
    flex-direction: column;
    
    p {
        font-size: 1.5rem;
    }
`
const StyledBottomPage = styled.h1<{
    ismobile: boolean
}>`
    z-index: 1;
    padding: 1rem;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 400;
`
const StyledLogo = styled.h5`
    font-family: font;
    font-size: 4rem;
    text-transform: capitalize;
    line-height: 1;
    padding-bottom: 1rem;
    cursor: pointer;
    width: fit-content;
`

const Title = (props: ITitles) => {
    const dispatch = useDispatch()
    const isMobile = useWidthWindowSize() >= 1024 ? false : true
    const title = replaceUnicode(props.title)
    
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
            id={`${props.index}`}
            className="StyledTitle"
            key={uuidv4()}
            ismobile={isMobile}
            onClick={() => toggleClick()}
        >
            {unicodeNum(props.index)} {title}
        </StyledTitle>
    )
}

// const Regata = (props: ITitles) => {
//     const dispatch = useDispatch()
//     const isMobile = useWidthWindowSize() >= 1024 ? false : true

//     const toggleClick = () => {
//         $(`body`).css("overflow", "hidden")
//         dispatch(SET_CONTENT(props.post))
//         dispatch(SET_ISPOSTVISIBLE(true))
//     }

//     return(
//     <StyledSuperButtons
//         href={regataScript_landing}
//         target="_blank"
//         ismobile={isMobile}
//     >
//         <img src={regataLogo} alt={regataScript_alt} />
//     </StyledSuperButtons>
//     )
// }

const Home = () => {    
    const dispatch = useDispatch()

    const isPostSuccess = useSelector(isPostSuccessSelector)
    const isPostLoading = useSelector(isPostLoadingSelector)
    const isPostError = useSelector(isPostErrorSelector)
    
    const posts = useSelector(postsSelector)
    const page = useSelector(pagesSelector)

    const isPostVisible = useSelector(isPostVisibleSelector)
    const bkgColor = useSelector(bkgColorSelector)
    const isMobile = useWidthWindowSize() >= 768 ? false : true
    const content = useSelector(contentSelector)

    const toggleClick = () => {
        $(`body`).css("overflow", "visible")
        dispatch(SET_ISPOSTVISIBLE(false))
    }

    const toggleLogo = () => {
        document.getElementById("1")?.click()
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
                    loading={!isPostSuccess}
                    error={isPostError }
                    success={isPostSuccess}
                    componentOnLoading={<></>}
                    // componentOnLoading={<FlowBanner text={the_blog_title}/>}
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
                                    <StyledLogo 
                                        id="StyledLogo"
                                        onClick={() => toggleLogo()}
                                    >
                                        {the_blog_title}
                                    </StyledLogo>
                                </StyledTopSXPage>
                                {/* <StyledTopDXPage
                                    id="StyledTopDXPage" 
                                >
                                    <StyledSuperButtons
                                        href={regataScript_landing}
                                        target="_blank"
                                        ismobile={isMobile}
                                    >
                                        <img src={regataLogo} alt={regataScript_alt} />
                                    </StyledSuperButtons>
                                    <StyledSuperButtons
                                        href={regataScript_landing}
                                        target="_blank"
                                        ismobile={isMobile}
                                    >
                                        <img src={regataLogo} alt={regataScript_alt} />
                                    </StyledSuperButtons>
                                </StyledTopDXPage> */}
                            </StyledTopPage>
                            <Mail />
                            {/* <Whatsapp /> */}
                            {/* <MenuButton /> */}
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
                                                title={replaceUnicode(post.title.rendered)}
                                            />
                                        )
                                    }
                                )}
                            </StyledBottomPage>
                        </>
                    }
                />
            </StyledPageSections>

            <BkgImage />
            <BkgVideo />
        </>
    )
}

export default Home