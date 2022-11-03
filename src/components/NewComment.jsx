import { useState, useContext } from "react"
import { UserContext } from "./context/UserContext";
import * as API from '../utils/api';

export default function NewComment({article_id, setComments}){
    const [body, setBody] = useState("");
    const [error, setError] = useState(null);
    const user = useContext(UserContext);
    const { username } = user;

    const handleSubmit = (event) => {
        event.preventDefault();
        API.postCommentByArticleID(article_id, body, username)
        .then((postedComment) => {
            setComments((currentComments) => {
               const copyOfCurrent = [...currentComments];
               copyOfCurrent.unshift(postedComment);
               return copyOfCurrent;
           })
           setError(null);
           setBody("")
        }
        )
        .catch((err) => {
            setError(err);
        })
    }

    const handleChange = (event) => {
        setBody(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="min-w-full px-6 py-14 mx-auto mb-4 bg-slate-100 border-solid border-b-2">
            <label htmlFor="message" className="block mb-2 text-base text-gray-900 dark:text-gray-400">Your message</label>
            <textarea value={body} onChange={handleChange} id="message" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            <button disabled={body.length === 0 ? true : false} type="submit" className="text-white mx-auto mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}