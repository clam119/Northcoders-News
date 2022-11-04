import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import { useState, useEffect } from 'react';
import * as API from '../utils/api';

export default function CommentsDisplay({ article_id })  {
    const [comments, setComments] = useState([]);

    const removeComment = (comment_id) => {
        setComments((currentComments) => {
            return currentComments.filter((comment) => comment.comment_id !== comment_id);
        })
    }

    useEffect(() => {
        API.getCommentsByArticleID(article_id)
        .then((comments) => {
            setComments(comments);
        })
    }, [article_id])

    return (
    comments.length === 0 ? 
   
    <div className="max-w-5xl px-6 py-14 mx-auto mb-5">
        <NewComment article_id={ article_id } setComments={setComments} />
        <p className="max-w-full px-6 py-16 mx-auto md:text-base mp:text-sm bg-slate-50">No Comments Found</p>
    </div>:
    

    <ul className="max-w-5xl bg-white mx-auto px-0 sm:px-6 lg:px-8 grid">
        <NewComment article_id={article_id} setComments={setComments} />
            {comments.map(({ comment_id, author, body, article_id, votes, created_at }) => {
            const convertedCreationDate = created_at.slice(0, 10)
            return (
                <li key={comment_id} >
                    <CommentCard removeComment={removeComment} comment_id={comment_id} author={ author } body={ body } article_id={ article_id } votes={ votes } created_at={ convertedCreationDate }  />
                </li>
            )
        })}
    </ul>
    )
}
