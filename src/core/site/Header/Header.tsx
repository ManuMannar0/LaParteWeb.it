import SimpleHeader from "core/components/SimpleHeader/SimpleHeader"
import { ICustomize } from "core/model/model"

const Header = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleHeader /> 

export default Header