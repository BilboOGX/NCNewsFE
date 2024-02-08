import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { addComment, fetchArticleByID, getAllComments } from "../../Axios Requests/requests"
import { UserContext } from "../Context/users"
import { useContext } from "react"
import GetComments from '../Comments/comments'

export default function CommentForm(){
    const [ articleData, setArticleData] = useState({})
    const [ body, setBody] = useState('')
    const { article_id } = useParams()
    const { user } = useContext(UserContext)
    const [ successfulPost, setSuccessfulPost] = useState(false)

function handleSubmit(event){
    event.preventDefault();
    addComment(article_id, body, user.username)
    .then(response => {
    setSuccessfulPost(true)
    setBody('')
    setTimeout(() => setSuccessfulPost(false), 2000)
  })
  .catch(error => {
    <p>Comment Submission Failed! Please Try Again.</p>
  });
    }

    useEffect(() => {
        fetchArticleByID(article_id).then((response) => {
        setArticleData(response.data)
        }).catch(error => {
            console.log(error)
    }, []);
    })

    if (successfulPost) return <p className="commentSuccess">Comment Submitted Successfully</p>
    
    return(

        <form className='commentForm' onSubmit={handleSubmit}>
            <label htmlFor="body" >
                <textarea className='textArea' type='text' id='body' value={body}
                onChange={(event) => {
                setBody(event.target.value)}}
                required
                placeholder="Leave A Your Comment..."
                ></textarea>
            </label>
            
            <button>Add Comment</button>
        </form>
    )
}