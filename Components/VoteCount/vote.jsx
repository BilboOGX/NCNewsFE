import { fetchArticleByID, updateVotes } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../VoteCount/vote.css'

export default function Count(){
    const [ likeCount, setLikeCount] = useState(0)
    const { article_id } = useParams()

    function handleLike(){
        const newLikeCount = likeCount + 1
        setLikeCount(newLikeCount)    
        updateVotes(article_id, 1).then(response => {
        setLikeCount(response.data.votes)
        }).catch(error => {
            console.error('Vote Not Registered')
            setLikeCount(likeCount)
        })
        
    }
    function handleDislike(){
        const newLikeCount = (likeCount -2000000)
        setLikeCount(newLikeCount)
        updateVotes(article_id, -1).then(response => {
        setLikeCount(response.data.votes)
        }).catch(error => {
            console.error('Vote Not Registered')
            setLikeCount(likeCount)
        })
    }
    useEffect(() => {
        fetchArticleByID(article_id).then((response) => {
        setLikeCount(response.data.article.votes);
      });
    }, []);

    return (
        <>  
            <button className='likeButton' onClick={handleLike}>Like 👍🏻</button>
            <button className='likeButton' onClick={handleDislike}>Dislike 👎🏻</button>
            <p className='likeButton'>Likes: {likeCount}</p> 
        </>  
)}
    

