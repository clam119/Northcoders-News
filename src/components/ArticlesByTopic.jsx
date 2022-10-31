import ArticleCard from "./ArticleCard";
import * as API from '../utils/api';
import ErrorPage from './ErrorPage';
import NoContentPage from "./NoContentPage";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ArticlesByTopic () {
    const { slug } = useParams();
    
    const [displayedArticles, setDisplayedArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        API.getArticles(slug)
        .then((articlesData) => {
            setDisplayedArticles(articlesData);
            setIsLoading(false);
        })
        .catch((err) => {
            setError(true);
        })
    }, [slug])

    if (isLoading) {
        return <h1>Loading Articles...</h1>
    } 

    if (error) {
        return <ErrorPage/>
    }

    if (displayedArticles.length === 0) {
        return <NoContentPage/>
    }
    else return(
        <ul className="bg-slate-100 mx-auto px-4 sm:px-6 lg:px-8 grid">
           {displayedArticles.map(({ article_id, title, author, topic, body, comment_count, votes }, index) => {
            return (
                <li key={index} >
                    <ArticleCard title={title} author={author} topic={topic} body={body} comment_count={comment_count} article_id={article_id} votes={votes} />
                </li>
            )
           })}
        </ul>
    )
}