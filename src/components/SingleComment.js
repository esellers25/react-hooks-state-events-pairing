function SingleComment({user, comment}) {
    return (
        <li>
            <h3>{user}</h3>
            <p>{comment}</p>
        </li>
    )
}

export default SingleComment;