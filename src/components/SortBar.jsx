import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import * as API from '../utils/api';

export default function SortBar({ setDisplayedArticles }) {
    const [sortOption, setSortOption] = useState('created_at');
    const [orderOption, setOrderOption]= useState('desc');
    const [limitOption, setLimitOption] = useState(10);
    // eslint-disable-next-line no-unused-vars
    const [currentUrl, setCurrentUrl] = useSearchParams();

    const handleSort = (event) => {
        setSortOption(event.target.value)
        setCurrentUrl((currUrl) => {
            let localCurrUrlCopy = currUrl;
            localCurrUrlCopy.set('sort_by', []);
            return localCurrUrlCopy += event.target.value;
        })
      
    }

    const handleOrder = (event) => {
        setOrderOption(event.target.value);
        setCurrentUrl((currUrl) => {
           let localCurrUrlCopy = currUrl;
           localCurrUrlCopy.set('order', []);
           return localCurrUrlCopy += event.target.value;
        })
    }

    const handleLimit = (event) => {
        setLimitOption(event.target.value);
        setCurrentUrl((currUrl) => {
            let localCurrUrlCopy = currUrl;
            localCurrUrlCopy.set('limit', []);
            return localCurrUrlCopy += event.target.value;
        })
    }

    useEffect(() => {
        API.getSortedArticles(sortOption, orderOption, limitOption)
        .then((orderedArticles) => {
            setDisplayedArticles(orderedArticles);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortOption, orderOption, limitOption])

    return(
        <>
        <div className="grid sm:grid-cols-3 mp:grid-cols-3- max-w-7xl px-4 py-4 mx-auto ">
        <label className="grid-auto justify-center" htmlFor="sort_by">Sort By: 
            <select onChange={handleSort} value={sortOption} name="sort_by" className="max-w-full mx-auto bg-red text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="sort-dropdown">
                <option disabled className="text-base text-center block px-4 py-2" value="">Select An Option</option>
                <option className="text-base text-center block px-4 py-2" value="created_at">Date</option>
                <option className="text-base text-center block px-4 py-2" value="comment_count">Comments</option>
                <option className="text-base text-center block px-4 py-2" value="votes">Votes</option>
            </select>
        </label>

        <label className="grid-auto justify-center" htmlFor="order">Order: 
            <select onChange={handleOrder} value={orderOption} name="order" className="max-w-full mx-auto bg-red text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="order-dropdown">
                <option disabled className="text-base text-center block px-4 py-2" value="">Select An Option</option>
                <option className="text-base text-center block px-4 py-2" value="asc">Asc</option>
                <option className="text-base text-center block px-4 py-2" value="desc">Desc</option>
            </select>
        </label>

        <label className="grid-auto justify-center" htmlFor="limit">Limit: 
            <select onChange={handleLimit} value={limitOption} name="limit" className="max-w-full mx-auto bg-red text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="order-dropdown">
                <option disabled className="text-base text-center block px-4 py-2" value="">Select An Option</option>
                <option className="text-base text-center block px-4 py-2" value={10}>10</option>
                <option className="text-base text-center block px-4 py-2" value={25}>25</option>
                <option className="text-base text-center block px-4 py-2" value={50}>50</option>
            </select>
        </label>
        </div>
        </>
  )}
