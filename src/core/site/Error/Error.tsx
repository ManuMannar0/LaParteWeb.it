import SimpleError from "core/components/ModalLoader/SimpleError/SimpleError"
import { ICustomize } from "core/model/model"

const Error = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleError name={'noname'} /> 

export default Error