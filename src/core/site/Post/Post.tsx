import SimplePost from "core/components/SimplePost/SimplePost"
import { ICustomize } from "core/model/model"

const Post = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimplePost /> 

export default Post