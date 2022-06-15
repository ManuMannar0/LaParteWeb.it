import Loading from "core/components/ModalLoader/SimpleLoading/SimpleLoading";
import SimpleError from "core/components/ModalLoader/SimpleError/SimpleError";
import { useSelector } from "react-redux";
import { isPostErrorSelector, isPostLoadingSelector, isPostSuccessSelector, postsSelector } from '../../../store/posts/selectors';
import { IPost } from '../../../store/posts/slice';
import ModalLoader from "../../ModalLoader/ModalLoader";
import SimplePostPreview from "../../SimplePostPreview/SimplePostPreview";

const SimpleHomeArchive = () => {
    const posts = useSelector(postsSelector)
    const isPostLoading = useSelector(isPostLoadingSelector)
    const isPostError = useSelector(isPostErrorSelector)
    const isPostSuccess = useSelector(isPostSuccessSelector)
    return(
        <ModalLoader 
            loading={isPostLoading}
            error={isPostError}
            success={isPostSuccess}
            componentOnLoading={<Loading />}
            componentOnError={<SimpleError name={'SimplePostPreview'} />}
            componentOnSuccess={posts.map((post: IPost) => <SimplePostPreview render={post.sticky} post={post} />)}
        />
    )
} 

export default SimpleHomeArchive

