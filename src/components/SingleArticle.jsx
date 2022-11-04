import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as API from '../utils/api';
import CommentsDisplay from "./CommentsDisplay";
import ErrorPage from "./ErrorPage";
import Votes from "./Votes";

export default function SingleArticle() {
    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [article, setArticle] = useState([]);
    const { title, topic, body, author, votes } = article;
    
    useEffect(() => {
        setIsLoading(true);
        API.getArticleByID(article_id)
        .then((articleData) => {
            setArticle(articleData);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
            setHasError(true)
        })
    }, [article_id])

    useEffect(() => {
        setCommentsLoading(true);
        API.getCommentsByArticleID(article_id)
        .then((articleComments) => {
            setComments(articleComments);
            setCommentsLoading(false);
        })
        .catch((err) => {
            setCommentsLoading(false);
            setError(err);
            setHasError(true);
        })
    }, [article_id])

    if(isLoading & commentsLoading) {
        return (
            <h1>Loading Article and ...</h1>
        )
    }

    if(hasError) {
        return (
            <ErrorPage/>
        )
    }

    else {
        return (
        <>
        <div className="max-w-5xl px-6 py-16 mx-auto auto-cols-auto">
            <article className=" px-8 py-8 space-y-8 dark:bg-gray-800 dark:text-gray-50 bg-white rounded ">
                <div className="space-y-6" >
                    <h1 className=" text-black-500 text-7xl font-bold md:tracking-tight md:text-5xl mp:text-4xl">{title}</h1> 
                    <h2 className=" mt-4 text-lg text-centre text-black-600 mp:text-base">Topic: #{topic}</h2>
                </div>
                <div className="dark:text-gray-100">
                    <p className="text-left md:text-base mp:text-base">{body}</p>
                </div>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center sm:flex-row sm:items-center dark:text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <Link to={`/users/${author}`}> <p className="text-sm text-black-500 mp:text-sm">Posted By: {author}</p> </Link>
                    </div>
                    <div className="flex items-center md:space-x-2">
                        <Votes article_id={article_id} votes={votes} />
                    </div>
                </div>
            </article>
        </div>
     
        <CommentsDisplay article_id={article_id} comments={comments} setComments={setComments} />
        </>
        )
    }
}
