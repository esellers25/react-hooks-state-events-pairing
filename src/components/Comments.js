import SingleComment from "./SingleComment";

function Comments({commentsInfo}) {
    
    const commentList = commentsInfo.comments.map((comment) => {
        return (
            <SingleComment
            key={comment.id}
            user={comment.user}
            comment= {comment.comment}
            />
        )
    })

    
    return (
        <h2>{commentsInfo.comments.length} Comments
            <ul>
                {commentList}
            </ul>
        </h2>
    )
}

export default Comments;