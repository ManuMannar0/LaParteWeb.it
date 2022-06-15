import SimpleFooter from "core/components/SimpleFooter/SimpleFooter"
import { ICustomize } from "core/model/model"

const Footer = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleFooter />

export default Footer