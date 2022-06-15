import { useParams } from "react-router";
import { isPageErrorSelector, isPageLoadingSelector, isPageSuccessSelector, pagesSelector } from "../../store/pages/selectors";
import { useSelector } from "react-redux";
import { IPage } from "../../store/pages/slice";
import ModalLoader from "../ModalLoader/ModalLoader";
import Loading from "core/site/Loading/Loading";
import SimpleError from "../ModalLoader/SimpleError/SimpleError";
import { replaceUnicode } from "core/features/strings";

const SimplePage = () => {
    const pages = useSelector(pagesSelector)
    const isPageLoading = useSelector(isPageLoadingSelector)
    const isPageError = useSelector(isPageErrorSelector)
    const isPageSuccess = useSelector(isPageSuccessSelector)
    const { pageIDSlug } = useParams()
    return (
        <ModalLoader 
            loading={isPageLoading}
            error={isPageError}
            success={isPageSuccess}
            componentOnLoading={<Loading />}
            componentOnError={<SimpleError name={'SimplePage'} />}
            componentOnSuccess={
                pages.map((page: IPage) => {
                    return(
                        page.id === Number(pageIDSlug) ?
                            <>
                                <h1>{replaceUnicode(page.title.rendered)}</h1>
                                <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
                            </>
                        :
                            <></>
                    )
                })
            }
        />
    );
  }

  export default SimplePage