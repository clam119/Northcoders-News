import SingleArticle from "./ArticleCard";
import * as API from '../utils/api';
import { useState, useEffect } from 'react';

export default function Home () {

    // States To Track User's Filtering - If any of the sort/order/topic change then re-render the articles displayed
    const [displayedArticles, setDisplayedArticles] = useState([]); 
    const [sort, setSort] = useState('created_at');
    const [order, setOrder] = useState('DESC');
    const [topic, setTopic] = useState('');

    useEffect(() => {
        API.getArticles()
        .then((articlesData) => {
            console.log(articlesData, '<<Success')
            setDisplayedArticles(articlesData);
        })
    }, [sort, order, topic])

    return(
        <ul className="bg-slate-100 mx-auto px-4 sm:px-6 lg:px-8">
           {displayedArticles.map(({ article_id, title, author, topic, body, comment_count, votes }) => {
            return (
                <li>
                    <SingleArticle key={article_id} title={title} author={author} topic={topic} body={body} comment_count={comment_count} article_id={article_id} votes={votes} />
                </li>
            )
           })}
        </ul>
    )
}