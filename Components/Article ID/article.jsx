import './article.css'
import { Link, useParams } from "react-router-dom";
import { fetchArticleByID, getAllComments } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";
import GetComments from '../Comments/comments';
import Count from '../VoteCount/vote';
import CommentForm from '../Comments/commentForm';

export default function SingleArticle(){
const { article_id } = useParams()
const [article, setArticle] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [comments, setComments] = useState([])

useEffect(() => {
    fetchArticleByID(article_id).then((response) => {
      setArticle(response.data.article);
      setIsLoading(false)
    });

    getAllComments(article_id).then(response => {
      setComments(response.data)
    });
  }, [article_id]);
  
  const addCommentOptimistically = (newComment) => {
    setComments(currentComments => [newComment, ...currentComments]);
};

  if(isLoading) return <> 
  <div className="loader-container">
  <div class="loader"></div> 
  <p>Article Loading</p>
  </div>
  </>

  return (
    <div className='parent'>
    <div className="div1">
        <p className='articleContentTitle'>{article.title}</p>
        <p className='articleContent'>Created At: {Date(article.created_at)}</p> 
        <p className='articleContent'>Author: {article.author}</p>
        <p className='articleContent'>Topic: {article.topic}</p>
        <p className='articleContent'>{article.body}</p>
        <p><Count/></p>
    </div>
    <div class="div2"> 
        <CommentForm articleId={article_id} addCommentOptimistically={addCommentOptimistically}/> </div>
    <div class="div3">
        <GetComments comments={comments}/>
    </div>
</div>
  );
};
