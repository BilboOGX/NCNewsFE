import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { addComment, fetchArticleByID, getAllComments } from "../../Axios Requests/requests"
import { UserContext } from "../Context/users"
import { useContext } from "react"

export default function CommentForm({ articleId, addCommentOptimistically }){
    const [ articleData, setArticleData] = useState({})
    const [ body, setBody] = useState('')
    const { article_id } = useParams()
    const { user } = useContext(UserContext)
    const [ successfulPost, setSuccessfulPost] = useState(false)
    const [ comments, setComments] = useState({})

        function handleSubmit(event){
            event.preventDefault();
            const newComment = {
                body: body,
                author: user.username,

                
            }
            addCommentOptimistically(newComment)

            addComment(article_id, body, user.username)
                .then(response => {
                    setSuccessfulPost(true)
                    setBody('')
                    setTimeout(() => setSuccessfulPost(false), 2000)
                })
                .catch(error => {alert('Submission Failed! Log in and please try again.')
                });
        }

        // useEffect(() => {
        //     fetchArticleByID(article_id)
        //         .then(response => {
        //             setArticleData(response.data)
        //             getAllComments(article_id)})
        //         .then((response) => {
        //             setComments(response.data)
        //         })
        //         .catch((error) => {
        //         });
        // }, [comments]);

    if (successfulPost) return <p className="commentSuccess">Comment Submitted Successfully</p>
    
    return(

        <form className='commentForm' onSubmit={handleSubmit}>
            <label htmlFor="body" >
                <textarea className='textArea' type='text' id='body' value={body}
                onChange={(event) => {
                setBody(event.target.value)}}
                required
                placeholder="Leave Your Comment..."
                ></textarea>
            </label>
            
            <button>Add Comment</button>
        </form>
    )
}
