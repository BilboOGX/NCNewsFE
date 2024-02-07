import axios from "axios";

const ncapi = axios.create({
    baseURL: 'https://ncnews-mcpn.onrender.com/api/'
});

export function fetchArticles(){
    return ncapi.get('articles')
}

export function fetchArticleByID(article_id){
    return ncapi.get(`articles/${article_id}`)
}

export function getAllComments(article_id){
    return ncapi.get(`articles/${article_id}/comments`)
}

export function updateVotes(article_id, newLikeCount){
    return ncapi.patch(`articles/${article_id}`, {inc_votes: newLikeCount});
}