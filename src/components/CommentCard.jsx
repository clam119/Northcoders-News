import { Link } from "react-router-dom"
import Votes from "./Votes"

export default function CommentCard( { comment_id, body, author, votes, created_at }) {
    
    return(
        <div className="max-w-fill px-6 py-16 mx-auto auto-cols-auto bg-slate-50">
            <article className=" px-8 py-8 space-y-8 dark:bg-gray-800 dark:text-gray-50 bg-white rounded ">
                <div className="dark:text-gray-100">
                    <p className="text-left md:text-base mp:text-sm">{body}</p>
                </div>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center sm:flex-row sm:items-center dark:text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <Link to={`/users/${author}`}> <p className="text-sm text-black-500 hover:border-blue-700 hover:text-blue-700 mp:text-sm">Posted By: {author}</p> </Link>
                        </div>
                        <div className="flex items-center md:space-x-2">
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0 text-black-500 mp:text-sm">Posted On: {created_at}</p>
                        </div>
                            
                        <div className="flex items-center md:space-x-2">
                            <Votes comment_id={comment_id} votes={votes} />
                        </div>
                        
                    </div>
            </article>
	    <div>
        </div>
    </div>
    )
}