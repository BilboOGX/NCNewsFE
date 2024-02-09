import { getAllComments } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './comments.css'
import { deleteComment } from "../../Axios Requests/requests";
import { UserContext } from "../Context/users"
import { useContext } from "react"


export default function GetComments(){
const { article_id } = useParams()
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)
const { user } = useContext(UserContext)



const handleDelete = (comment_id, author) => {
    if (author === user.username) {
        alert('Comment Successfully Deleted')
        deleteComment(comment_id)
        .then(() => {
        })
        .catch((error) => {
          console.error(error);
          alert('Failed to delete the comment.');
        })
    } else {
      alert(`This comment belongs to ${author}`);
    }
  };

useEffect(() => {
    getAllComments(article_id).then((response) => {
        setComments(response.data)
        setIsLoading(false)
    });
}, [])
if(isLoading) return <p>Comments Loading...</p>

return (
   
    
    comments.length === 0 ? 
    (<li className="commentList3"> <p>No Comments To Display</p> 
    <p>Be The First and Comment Above</p></li>) : 
    (
    <>  
    
    <section>
    
        <ul className='commentList'>
            {comments.map((comment) => {
            
                return (
                    
                    <li className='commentList2'>
                       <p>Author: {comment.author}</p>
                       <p>Votes: {comment.votes}</p>
                       <p>{Date(comment.created_at)}</p>
                       <p>{comment.body}</p>
                       <button onClick={() => handleDelete(comment.comment_id, comment.author)}>
                            Delete Comment
                        </button>
                    </li>
                )
            })}
        </ul>
        
        </section>
    </>
)
)    
}

  