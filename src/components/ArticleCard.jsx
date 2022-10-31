import { Link } from 'react-router-dom';

export default function SingleArticle ({title, author, topic, body, comment_count, article_id, votes}) {
    const limitedBodyCount = body.slice(0, 250);
    return (
        <div className="max-w-5xl px-6 py-16 mx-auto">
            <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50 bg-slate-50 rounded ">
                <div className="space-y-6" >
                    <Link to={`/articles/${article_id}`}><h1 className=" text-black-500 hover:border-blue-700 hover:text-blue-700 text-7xl font-bold md:tracking-tight md:text-5xl ">{title}</h1> </Link>
                    <Link to={`topics/${topic}`}> <h2 className=" mt-4 text-lg text-centre text-black-600 hover:border-blue-700 hover:text-blue-700">Topic: #{topic}</h2> </Link>
                </div>
                <div className="dark:text-gray-100">
                    <p className="text-left">{`${limitedBodyCount}...`}</p>
                    <Link to={`/articles/${article_id}`}> <p className="text-black-500 hover:border-blue-700 hover:text-blue-700 text-right">Read More</p> </Link>
                </div>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center sm:flex-row sm:items-center dark:text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <Link to={`/users/${author}`}> <p className="text-sm text-black-500 hover:border-blue-700 hover:text-blue-700">Posted By: {author}</p> </Link>
                        </div>
                        <div className="flex items-center md:space-x-2">
                             <Link to={`/articles/${article_id}`}> <p className="text-right flex-shrink-0 mt-3 text-sm md:mt-0 text-black-500 hover:border-blue-700 hover:text-blue-700">Upvotes: {votes}</p> </Link>
                        </div>
                        <Link to={`/articles/${article_id}`}> <p className="text-right flex-shrink-0 mt-3 text-sm md:mt-0 text-black-500 hover:border-blue-700 hover:text-blue-700">Comments: {comment_count}</p> </Link>
                    </div>
            </article>
	    <div>
        </div>
    </div>
    )
}