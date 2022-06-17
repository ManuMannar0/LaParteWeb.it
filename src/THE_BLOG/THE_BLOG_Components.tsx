import SimpleEmptyComponent from "core/components/SimpleEmptyComponent/SimpleEmptyComponent"
import { ICustomizeSite } from "core/model/model"
import Home from "./comps/Home"

/**
 * You can pass:
 *  - false (it returns a default component)
 *  - SimpleEmptyComponent (it returns <></> and you have to import it)
 *  - your component
 */

export const CUSTOMIZED_SITE: ICustomizeSite = {

    logo: <SimpleEmptyComponent />,
    header: <SimpleEmptyComponent />,
    menu: <SimpleEmptyComponent />,
    home: <Home />,
    category: false,
    page: false,
    post: false,
    custom: false,
    footer: <SimpleEmptyComponent />,
    help: false,
}

export default CUSTOMIZED_SITE
