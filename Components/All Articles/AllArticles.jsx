import { fetchArticles } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";
import './AllArticles.css'

export default function ArticleList(){
  
    const [articles, setArticles] = useState([]);
            useEffect(() => {
            fetchArticles().then((response) => {
                setArticles(response.data.article)
                console.log(response.data.article)
            })
        
    }, []);
    return (
    
        <section>
        <ul className='articleList'>
            {articles.map((article) => {
                console.log(article)
                return (
                    <li className='articleList2'>
                        <p>Article Title: {article.title} </p>
                        <p>Topic: {article.topic}</p>
                        <p>Author: {article.author}</p>
                        <p>Created On: {article.created_at}</p>
                        <p>Votes: {article.votes} </p>
                        <img className='article-img' src={article.article_img_url}/>
                    </li>
                )
            })}
        </ul>
        </section>
    )
}
