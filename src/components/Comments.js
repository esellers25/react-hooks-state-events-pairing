import {useState} from "react";
import SingleComment from "./SingleComment";

function Comments({commentsInfo}) {
    
    const [isHidden, setIsHidden] = useState(true)
    function hideComments(){
        setIsHidden(!isHidden)
    }

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
        <main>
            <button onClick ={hideComments}>{isHidden ? "Show" : "Hide"} Comments</button>
            <h2>{commentsInfo.comments.length} Comments
            <ul>
                {commentList}
            </ul>
            </h2>
        </main> 
    )
}

export default Comments;