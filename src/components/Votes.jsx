import { useState } from "react";
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import * as API from '../utils/api';

export default function Votes ({ article_id, comment_id, votes}) {
    const [changeVotes, setChangeVotes] = useState(0);
    const [error, setError] = useState(null);

    const handleUpvote = () => {

        //If the Votes component is passed in an article
        if(article_id) {
            if(changeVotes === 0) {
                setChangeVotes(1)
                API.patchArticleByID(article_id, 1)
                .then(() => {
                    setError(null);
                })
                .catch((err) => {
                    setError(err);
                })
            }
            else if (changeVotes === -1) {
                setChangeVotes(0);
                API.patchArticleByID(article_id, 1)
                .then(() => {
                    setError(null);
                })
                .catch((err) => {
                    setError(err);
                })
            }
        }
      
        //if passed in a comment
        if(comment_id) {
            if(changeVotes === 0) {
                setChangeVotes(1)
                API.patchCommentByID(comment_id, 1)
                .then(() => {
                    setError(null);
                })
                .catch((err) => {
                    setError(err);
                })
                .catch((err) => {
                    setError(err);
                })
            }
            else if (changeVotes === -1) {
                setChangeVotes(0);
                API.patchCommentByID(comment_id, 1)
                .then(() => {
                    setError(null);
                })
                .catch((err) => {
                    setError(err);
                })
            }
        }
    }

    const handleDownvote = () => {

        if(changeVotes === 0) {
            setChangeVotes(-1)
            API.patchArticleByID(article_id, -1)
            .then(() => {
                setError(null);
            })
            .catch((err) => {
                setError(err);
            })

        }
        else if (changeVotes === 1) {
            setChangeVotes(0);
            API.patchArticleByID(article_id, -1)
            .then(() => {
                setError(null);
            })
            .catch((err) => {
                setError(err);
            })
        }

        if(comment_id) {
            if(changeVotes === 0) {
                setChangeVotes(-1)
                API.patchCommentByID(comment_id, -1)
                .then(() => {
                    setError(null);
                })
                .catch((err) => {
                    setError(err);
                })
            }
            else if (changeVotes === 1) {
                setChangeVotes(0);
                API.patchCommentByID(comment_id, -1)
                .then(() => {
                    setError(null);
                })
                .catch((err) => {
                    setError(err);
                })
            }
        }
    }
    return (
        <>
        <p className="text-right flex-shrink-0 mt-3 text-sm md:mt-0 text-black-500 mp:text-sm">Upvotes: {votes += changeVotes}</p> 
        <button disabled={changeVotes === 1 ? true : false } onClick={ handleUpvote }>
            <AiFillLike className="md:w-8 md:h-8 mp:w-6 mp:h-6 mx-auto hover:border-rose-200 hover:fill-rose-200  fill-rose-0" alt="The like button"/>
        </button>
        <button disabled={changeVotes === -1 ? true : false } onClick={ handleDownvote }>
            <AiFillDislike className="md:w-8 md:h-8 mp:w-6 mp:h-6 mx-auto hover:border-rose-200 hover:fill-rose-200  fill-rose-0" alt="The dislike button"/>
        </button>
        </>
    )
}