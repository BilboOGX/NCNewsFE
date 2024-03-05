import { fetchRandomArticles } from "../../Axios Requests/requests"
import { UserContext } from "../Context/users"
import { useContext, useEffect, useState } from "react"
import Count from "../VoteCount/vote"
import '../Home/home.css'

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
        <div className="pageContainer">
        <p className="title">Checkout A Random Article Below...</p>
        <li className="homeContainer">
            
                <p className="artHeading">{article.title}</p>
                <p>Author: {article.author}</p>
                <p>Topic:  {article.topic}</p>
                <p>{article.body}</p>
                <img className='artImage'src={article.article_img_url}/>
                </li>
                </div>
            </>):  
        (<div className="loader-container">
        <div class="loader"></div> 
        <p>Loading A Random Article</p>
        </div>)

        )
    }
