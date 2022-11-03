import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

export default function CommentsDisplay({ article_id, comments, setComments })  {
    return (
    comments.length === 0 ? 
    //If no comments then returns this:
    <div className="max-w-5xl px-6 py-14 mx-auto mb-5">
        <NewComment article_id={ article_id } setComments={setComments} />
        <p className="max-w-full px-6 py-16 mx-auto md:text-base mp:text-sm bg-slate-50">No Comments Found</p>
    </div>:
    
    //Else if comments exist returns:
        <ul className="max-w-5xl bg-white mx-auto px-0 sm:px-6 lg:px-8 grid">
               <NewComment article_id={article_id} setComments={setComments} />
                    {comments.map(({ comment_id, author, body, article_id, votes, created_at }, index) => {
                        const convertedCreationDate = created_at.slice(0, 10)
                    return (
                        <li key={index} >
                            <CommentCard comment_id={comment_id} author={ author } body={ body } article_id={ article_id } votes={ votes } created_at={ convertedCreationDate }  />
                        </li>
                    )
                    })}
        </ul>
    )
}
