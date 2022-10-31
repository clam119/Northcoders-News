import ArticleCard from "./ArticleCard";
import ErrorPage from './ErrorPage';
import * as API from '../utils/api';
import { useState, useEffect } from 'react';

export default function Home () {

    // States To Track User's Filtering - If any of the sort/order/topic change then re-render the articles displayed - Refactoring: Keeping current states for later use.
    const [displayedArticles, setDisplayedArticles] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [sort, setSort] = useState('created_at');
    const [order, setOrder] = useState('DESC');
    const [topic, setTopic] = useState('');

    useEffect(() => {
        setIsLoading(true);
        API.getArticles()
        .then((articlesData) => {
            setDisplayedArticles(articlesData);
            setIsLoading(false);
        })
        .catch((err) => {
            setError(err);
        })
    }, [sort, order, topic])

    if(isLoading) {
        return <h1>Loading Articles...</h1>
    }

    if(error) {
        return <ErrorPage />
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