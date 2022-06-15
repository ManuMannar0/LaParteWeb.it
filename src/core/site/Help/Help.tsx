import SimpleHelp from "core/components/SimpleHelp/SimpleHelp"
import { ICustomize } from "core/model/model"

const Help = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleHelp /> 

export default Help