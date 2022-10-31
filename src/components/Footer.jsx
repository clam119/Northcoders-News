export default function Footer () {
    return (
        <footer className="dark:bg-gray-800 dark:text-gray-50">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-rowmax-w-7xl px-4 sm:px-6 divide-gray-400">
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <li><a rel="noreferrer noopener" target="_blank" href="https://northcoders-news-api-production.up.railway.app/">API Reference</a></li>
                    <li><a rel="noreferrer noopener" target="_blank" href="https://github.com/clam119/">GitHub</a></li>
                    <li><a rel="noreferrer noopener" target="_blank" href="https://dev.to/clam119">Blog</a></li>
                    <li><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/christopher-lam-792b90161/">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    )
}