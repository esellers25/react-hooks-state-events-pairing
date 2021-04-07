function SingleComment({user, comment}) {
    return (
        <li>
            <h4>{user}</h4>
                <p>{comment}</p>
        </li>
    )
}

export default SingleComment;