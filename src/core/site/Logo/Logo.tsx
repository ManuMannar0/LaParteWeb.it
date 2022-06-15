import SimpleLogo from "core/components/SimpleLogo/SimpleLogo"
import { ICustomize } from "core/model/model"

const Logo = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleLogo /> 

export default Logo