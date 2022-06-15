import SimpleCategoryArchive from "core/components/Archives/SimpleCategoryArchive/SimpleCategoryArchive"
import { ICustomize } from "core/model/model"

const Category = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleCategoryArchive /> 

export default Category