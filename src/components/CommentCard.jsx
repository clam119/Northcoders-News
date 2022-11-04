import { UserContext } from './context/UserContext';
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Votes from "./Votes"
import * as API from '../utils/api';

export default function CommentCard( { comment_id: id, body, author, votes, created_at, removeComment}) {
    const { username } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false)
    const [error, setError] = useState(null);

    const handleDelete = () => {
        setIsLoading(true);
        API.deleteCommentByID(id)
        .then(() => {
            setIsDeleted(true);
            setIsLoading(false);
            removeComment(id)
        })
        .catch((err) => {
            setError(err);
        })
    }

   if(isLoading) {
        return <h1>Deleting Comment...</h1>
   }

   if(error) {
        return <h1>An Error Occurred When Deleting Comment</h1>
   }
    return(
        <div hidden={isDeleted === true ? true : false }className="max-w-fill px-6 py-16 mx-auto auto-cols-auto bg-slate-50">
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
                            <Votes comment_id={id} votes={votes} />
                            <button aria-label="Delete Comment" onClick={handleDelete} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:max-w-lg" hidden={author !== username ? true : false }>Delete</button>
                        </div>
                        
                </div>
            </article>
	    </div>
    )  
}