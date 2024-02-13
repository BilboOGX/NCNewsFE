import { fetchRandomArticles } from "../../Axios Requests/requests"
import { UserContext } from "../Context/users"
import { useContext, useEffect, useState } from "react"
import Count from "../VoteCount/vote"

export default function HomePage(){
    const [article, setArticle] = useState()
    
useEffect(() => {
    fetchRandomArticles()

    .then((response) => {
        console.log(response.data.article)
        setArticle(response.data.article)
      });
    }, []);

    return (
        article ? (
            <>
            <p>Enjoy A Random Article</p>
        <p>{article.title}</p>
        <p>{article.author}</p>
        <p>{article.topic}</p>
        <p>{article.body}</p>
        <img src={article.article_img_url}/>
        </>):  
        (<div className="loader-container">
        <div class="loader"></div> 
        <p>Loading A Random Article</p>
        </div>)
       
        )
    }
