import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IMenuForMenu } from '../../store/menu/slice';
import { isMenuRouteErrorSelector, isMenuRouteLoadingSelector, isMenuRouteSuccessSelector, menuRoutesSelector } from '../../store/menu/selectors';
import { homeButtonName, pathHome } from 'core/settings/settings';
import { upperCaseFirstChar} from "../../features/strings"
import ModalLoader from '../ModalLoader/ModalLoader';
import Loading from '../ModalLoader/SimpleLoading/SimpleLoading';
import Error from '../ModalLoader/SimpleError/SimpleError';

const MenuNav = () => {
    const menuRoutes = useSelector(menuRoutesSelector)
    return (
        <nav>
            <ul>
                <li key={uuidv4()}>
                    <Link key={uuidv4()} to={pathHome}>
                        {upperCaseFirstChar(homeButtonName)}
                    </Link>
                </li>
                {
                    menuRoutes.map((route: IMenuForMenu) => {
                        const linkRoute = `/${route.title}/${route.object_id}`
                        return(
                            <li key={uuidv4()}>
                                <Link key={uuidv4()} to={linkRoute}>
                                    {upperCaseFirstChar(route.title)}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>       
    );
}

const SimpleMenu = () => {
    const isMenuRouteLoading = useSelector(isMenuRouteLoadingSelector)
    const isMenuRouteError = useSelector(isMenuRouteErrorSelector)
    const isMenuRouteSuccess = useSelector(isMenuRouteSuccessSelector)
    return(
        <ModalLoader  
            loading={isMenuRouteLoading}
            error={isMenuRouteError}
            success={isMenuRouteSuccess}
            componentOnLoading={<Loading />}
            componentOnError={<Error name={'MenuNav'} />}
            componentOnSuccess={<MenuNav />}
        />
    )
} 

export default SimpleMenu 