import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as API from '../utils/api';
import ErrorPage from "./ErrorPage";

export default function SingleArticle() {
    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [article, setArticle] = useState([]);
    const { title, topic, body, author, votes, comment_count } = article;

    useEffect(() => {
        setIsLoading(true);
        API.getArticleByID(article_id)
        .then((articleData) => {
            console.log(articleData, 'successful fetch!')
            setArticle(articleData);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
            setHasError(true)
        })
    }, [article_id])

    if(isLoading) {
        return (
            <h1>Loading Article...</h1>
        )
    }

    if(hasError) {
        return (
            <ErrorPage/>
        )
    }

    else {
        return (
        <div className="max-w-5xl px-6 py-16 mx-auto auto-cols-auto">
            <article className=" px-8 py-8 space-y-8 dark:bg-gray-800 dark:text-gray-50 bg-white rounded ">
                <div className="space-y-6" >
                    <Link to={`/articles/${article_id}`}><h1 className=" text-black-500 hover:border-blue-700 hover:text-blue-700 text-7xl font-bold md:tracking-tight md:text-5xl mp:text-4xl">{title}</h1> </Link>
                    <h2 className=" mt-4 text-lg text-centre text-black-600 mp:text-base">Topic: #{topic}</h2>
                </div>
                <div className="dark:text-gray-100">
                    <p className="text-left md:text-base mp:text-base">{body}</p>
                </div>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center sm:flex-row sm:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <Link to={`/users/${author}`}> <p className="text-sm text-black-500 hover:border-blue-700 hover:text-blue-700 mp:text-sm">Posted By: {author}</p> </Link>
                    </div>
                    <div className="flex items-center md:space-x-2">
                        <Link to={`/articles/${article_id}`}> <p className="text-right flex-shrink-0 mt-3 text-sm md:mt-0 text-black-500 hover:border-blue-700 hover:text-blue-700 mp:text-sm">Upvotes: {votes}</p> </Link>
                    </div>
                </div>
            </article>
        </div>
        )
    }
}
