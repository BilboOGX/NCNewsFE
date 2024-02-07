import { fetchArticles } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";
import './AllArticles.css'
import { Link } from "react-router-dom";
import SingleArticle from "../Article ID/article";

export default function ArticleList(){
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true)
            useEffect(() => {
            fetchArticles().then((response) => {
                setArticles(response.data.article)
                setIsLoading(false)
            })
        
    }, []);
    if(isLoading) return <p>Loading Articles...</p>
    return (
    <>
        <section>
        <ul className='articleList'>
            {articles.map((article) => {
            
                return (
                    <li className='articleList2'>
                        
                        <Link to={`/articles/${article.article_id}`}>
                        <p>{article.title} </p>
                        <p>Topic: {article.topic}</p>
                        <p>Author: {article.author}</p>
                        <p>Created On: {Date(article.created_at)}</p>
                        <p>Votes: {article.votes} </p>
                        {/* <img className='article-img' src={article.article_img_url}/> */}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </section>
        </>
    )
}

