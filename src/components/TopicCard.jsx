import { Link } from 'react-router-dom';

export default function TopicCard ({ slug }) {
    console.log(slug, '<< topic card')
    return (
        <li key={slug}>
            <div className="max-w-5xl px-6 py-16 mx-auto auto-cols-auto">
                <article className=" px-8 py-8 space-y-8 dark:bg-gray-800 dark:text-gray-50 bg-rose-400 rounded text-black-500 hover:border-white-700 hover:text-white">
                    <Link to={`/topics/${slug}`}><h1 className="text-lg font-bold">{slug}</h1></Link>
                </article>
            </div>
        </li>
    )
}

