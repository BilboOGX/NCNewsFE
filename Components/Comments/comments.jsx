import { getAllComments } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './comments.css'


export default function GetComments(){
const { article_id } = useParams()
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getAllComments(article_id).then((response) => {
        setComments(response.data)
        setIsLoading(false)
    });
}, [])
if(isLoading) return <p>Comments Loading...</p>

return (
    <>  <section>
        <ul className='commentList'>
            {comments.map((comment) => {
            
                return (
                    <li className='commentList2'>
                       <p>Author: {comment.author}</p>
                       <p>Votes: {comment.votes}</p>
                       <p>{comment.created_at}</p>
                       <p>{comment.body}</p>
                       
                    </li>
                )
            })}
        </ul>
        </section>
    </>
)
    
}