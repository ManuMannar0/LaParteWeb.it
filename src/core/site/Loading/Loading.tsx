import SimpleLoading from "core/components/ModalLoader/SimpleLoading/SimpleLoading"
import custom from "../../../THE_BLOG/THE_BLOG_Components"

const Loading = () => custom ? <>{custom}</> : <SimpleLoading /> 

export default Loading