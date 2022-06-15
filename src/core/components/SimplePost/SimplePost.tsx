import { replaceUnicode } from "core/features/strings"
import Loading from "core/site/Loading/Loading"
import { isPostErrorSelector, isPostLoadingSelector, isPostSuccessSelector, postsSelector } from "core/store/posts/selectors"
import { IPost } from "core/store/posts/slice"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import ModalLoader from "../ModalLoader/ModalLoader"
import SimpleError from "../ModalLoader/SimpleError/SimpleError"

const SimplePost = () => {

    const posts = useSelector(postsSelector)
    const isPostLoading = useSelector(isPostLoadingSelector)
    const isPostError = useSelector(isPostErrorSelector)
    const isPostSuccess = useSelector(isPostSuccessSelector)   
    const { postIDSlug } = useParams()
    
    return (
        <ModalLoader 
            loading={isPostLoading}
            error={isPostError}
            success={isPostSuccess}
            componentOnLoading={<Loading />}
            componentOnError={<SimpleError name={'SimplePost'} />}
            componentOnSuccess={
                posts.map((post: IPost) => {
                    return(
                        post.id === Number(postIDSlug) ?
                        <>
                            <h1>{replaceUnicode(post.title.rendered)}</h1>
                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        </>
                        :
                        <></>
                    )
                })
            }
        />
    );
}

export default SimplePost