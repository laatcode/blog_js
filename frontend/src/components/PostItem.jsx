import './styles/PostItem.scss'

const Post = ({post}) => {

    const createdAt = new Date(post.created_at)

    return(
        <article className="post-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <div className="info">
                <span>{`${createdAt.toLocaleDateString('es-CO')} ${createdAt.toLocaleTimeString('es-CO')}`}</span>
            </div>
        </article>
    )
}

export default Post