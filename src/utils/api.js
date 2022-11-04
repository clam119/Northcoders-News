import axios from 'axios'

const newsApi = axios.create({
    baseURL: "https://northcoders-news-api-production.up.railway.app/api"
})

//Articles-Related HTTP Requests
export const getArticles = async (topic, sort_by, order, limit, p) => {
    const { data } = await newsApi.get('/articles', {
        params: {
            topic,
            sort_by,
            order,
            limit,
            p
        }
    });
    return data;
}

export const getSortedArticles = async (sort_by, order) => {
    const { data } = await newsApi.get('/articles', {
        params: {
            sort_by,
            order,
        }
    });
    return data;
}

export const postArticle = async (author, title, body, topic) => {
    const { data } = await newsApi.post('/articles', {
        author,
        title,
        body,
        topic
    });
    return data;
}

export const getArticleByID = async (article_id) => {
    const { data } = await newsApi.get(`/articles/${article_id}`);
    return data;
}

export const patchArticleByID = async (article_id, num) => {
    const { data } = await newsApi.patch(`/articles/${article_id}`, {
        inc_votes: num
    });
    return data;
}

export const deleteArticleByID = async (article_id) => {
    const { data } = await newsApi.delete(`/articles/${article_id}`);
    return data;
}

// Article-Comment Related HTTP Requests
export const getCommentsByArticleID = async (article_id) => {
    const { data } = await newsApi.get(`/articles/${article_id}/comments`);
    return data;
}

export const postCommentByArticleID = async (article_id, username, body) => {
    const { data } = await newsApi.post(`/articles/${article_id}/comments`, {username, body});
    return data;
}

export const patchCommentByID = async (comment_id, num) => {
    const { data } = await newsApi.patch(`/comments/${comment_id}`, {
        inc_votes: num
    })
    return data;
}

export const deleteCommentByID = async (comment_id) => {
    const { data } = await newsApi.delete(`/comments/${comment_id}`)
    return data;
}

// Users-Related HTTP Requests
export const getUsers = async () => {
    const { data } = await newsApi.get('/users');
    return data;
}

export const getUserByUsername = async (username) => {
    const { data } = await newsApi.get(`/users/${username}`);
    return data;
}

// Topics-Related HTTP Requests
export const getTopics = async () => {
    const { data } = await newsApi.get('/topics');
    return data;
}
