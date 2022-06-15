import { domain } from "../../settings/settings";
import magicWordGif from "../../imgs/magicWord.gif"

const Logo = () => {
    return(
        <img
            src={magicWordGif}
            alt={domain}
        />
    )
}

export default Logo