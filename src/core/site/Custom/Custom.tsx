import SimpleCustom from "core/components/SimpleCustom/SimpleCustom"
import { ICustomize } from "core/model/model"

const Custom = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleCustom /> 

export default Custom