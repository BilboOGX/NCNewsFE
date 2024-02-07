import './article.css'
import { Link, useParams } from "react-router-dom";
import { fetchArticleByID } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";
import GetComments from '../Comments/comments';
import Count from '../VoteCount/vote';

export default function SingleArticle(){
const { article_id } = useParams()
const [article, setArticle] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    fetchArticleByID(article_id).then((response) => {
      setArticle(response.data.article);
      setIsLoading(false)
    });
  }, []);
  if(isLoading) return <p>Article Loading...</p>

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
    <div class="div2"> ADD COMMENT FORM HERE </div>
    <div class="div3">
    <GetComments />
    </div>
</div>
  );
};
