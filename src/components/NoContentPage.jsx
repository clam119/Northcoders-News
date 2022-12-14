import { Link } from 'react-router-dom';

export default function NoContentPage () {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">204 - No Content</span>
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">No articles on this topic yet</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">Why don't you write the first article for this topic?</p>
                    <Link to="/" rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                </div>
            </div>
        </section>
    )
}