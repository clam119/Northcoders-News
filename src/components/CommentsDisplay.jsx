import CommentCard from "./CommentCard"

export default function CommentsDisplay({ comments })  {
    return (
    comments.length === 0 ? <p className="max-w-5xl px-6 py-16 mx-auto md:text-base mp:text-sm bg-slate-50">No Comments Found</p>: 
        <ul className="max-w-5xl bg-white mx-auto px-0 sm:px-6 lg:px-8 grid">
        {comments.map(({ comment_id, author, body, article_id, votes, created_at }, index) => {
        return (
            <li key={index} >
                <CommentCard comment_id={comment_id} author={ author } body={ body } article_id={ article_id } votes={ votes } created_at={ created_at }  />
            </li>
        )
        })}
        </ul>
    )
}
