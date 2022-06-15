import SimpleHomeArchive from "core/components/Archives/SimpleHomeArchive/SimpleHomeArchive"
import { ICustomize } from "core/model/model"

const Home = ({custom}: {custom: ICustomize}) => custom ? <>{custom}</> : <SimpleHomeArchive /> 

export default Home