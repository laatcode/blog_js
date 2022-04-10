import './styles/PostItem.scss'

const Post = ({post}) => {
    return(
        <article className="post-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
        </article>
    )
}

export default Post