import './article.css'
import { useParams } from "react-router-dom";
import { fetchArticleByID } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";

export default function SingleArticle(){
const { article_id } = useParams()
const [article, setArticle] = useState([])

useEffect(() => {
    fetchArticleByID(article_id).then((response) => {
        console.log(response.data.article)
      setArticle(response.data.article);
    });
  }, []);
  return (
    <div className='parent'>
    <div className="div1">
      <p className='articleContent'>Article Votes: {article.votes}</p>
        {/* <p className='articleContent'>Article ID: {article.article_id}</p> */}
        <p className='articleContent'>{article.title}</p>
        <p className='articleContent'>Created At: {article.created_at}</p> 
        <p className='articleContent'>Author: {article.author}</p>
        <p className='articleContent'>Topic: {article.topic}</p>
        <p className='articleContent'>{article.body}</p>
        
      {/* <img className='article-image'src={article.article_img_url}/> */}
    </div>
    <div class="div2"> ADD COMMENT FORM HERE </div>
    <div class="div3"> ALL COMMENTS FOR ARTICLE HERE
    <p>Total Comment Count: {article.number_of_comments}</p>
    </div>
</div>
  );
};
