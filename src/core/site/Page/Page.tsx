import SimplePage from "core/components/SimplePage/SimplePage"
import { ICustomize } from "core/model/model"

const Page = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimplePage /> 

export default Page