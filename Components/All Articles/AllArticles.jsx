import { fetchArticles, fetchByTopic } from "../../Axios Requests/requests";
import { useEffect, useState } from "react";
import './AllArticles.css'
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function ArticleList(){
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [searchParams] = useSearchParams();

    useEffect(() => {
        const topic = searchParams.get('topic');

        if (topic) {
            fetchByTopic(topic)
            .then((response) => {
                setArticles(response.data.article);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Failed to load', error)
                setIsLoading(false);
            });
        } else { 
            fetchArticles()
            .then((response) => {
                setArticles(response.data.article);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Failed to load', error);
                setIsLoading(false);
          });
        
    }}, [searchParams]);

    if(isLoading) { return <p className="loading">Loading Articles...</p> }
    
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
                        </Link>
                    </li>
                )
            })}
        </ul>
        </section>
        </>
    )
        }


