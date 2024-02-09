import axios from "axios";

const ncapi = axios.create({
    baseURL: 'https://ncnews-mcpn.onrender.com/api/'
});

export function fetchArticles(){
    return ncapi.get(`articles`)
}

export function fetchByTopic(topic){
    return ncapi.get(`articles?topic=${topic}`)
}


export function fetchArticleByID(article_id){
    return ncapi.get(`articles/${article_id}`)
}

export function getAllComments(article_id){
    return ncapi.get(`articles/${article_id}/comments`)
    
}

export function fetchUsers(){
    return ncapi.get('users')
}

export function updateVotes(article_id, newLikeCount){
    return ncapi.patch(`articles/${article_id}`, {inc_votes: newLikeCount});
}

export function addComment(article_id, body, username){
    return ncapi.post(`articles/${article_id}/comments`, {username: username, body: body});

}

export function deleteComment(comment_id){
    return ncapi.delete(`comments/${comment_id}`)
}