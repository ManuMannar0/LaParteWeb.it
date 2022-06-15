import SimpleEmptyComponent from "core/components/SimpleEmptyComponent/SimpleEmptyComponent"
import { ICustomizeSite } from "core/model/model"

/**
 * You can pass:
 *  - false (it returns a default component)
 *  - SimpleEmptyComponent (it returns <></> and you have to import it)
 *  - your component
 */

export const CUSTOMIZED_SITE: ICustomizeSite = {

    loading: false,
    error: false,
    logo: false,
    header: false,
    menu: false,
    home: false,
    category:false,
    page: false,
    post: false,
    custom: false,
    footer: false,
    help: false,
}

export default CUSTOMIZED_SITE
