import SimpleMenu from "core/components/SimpleMenu/SimpleMenu"
import { ICustomize } from "core/model/model"

const Menu = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleMenu />

export default Menu