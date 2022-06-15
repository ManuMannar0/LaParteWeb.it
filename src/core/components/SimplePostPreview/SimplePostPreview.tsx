import { IPost } from '../../store/posts/slice';
import { Link } from 'react-router-dom';
import { replaceUnicode } from 'core/features/strings';

type ISimplePostPreview = {
    post: IPost,
    render: boolean
}

const SimplePostPreview = (props: ISimplePostPreview) => {
    const img = props.post.featured_image_large && !props.post.featured_image_large.includes('default') && props.post.featured_image_large
    return(
        props.render ?
            <article>
                <h1>{replaceUnicode(props.post.title.rendered)}</h1>
                {img && <Link to={`/${props.post.type}/${props.post.id}`} title={replaceUnicode(props.post.title.rendered)}>
                    <img 
                        src={props.post.featured_image_large} 
                        alt={replaceUnicode(props.post.title.rendered)} 
                    />
                </Link>}
            </article> 
        :
            <></>
    )
}

export default SimplePostPreview
