import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import * as API from '../utils/api';

export default function SortBar({ setDisplayedArticles }) {
    const [sortOption, setSortOption] = useState('created_at');
    const [orderOption, setOrderOption]= useState('desc');
    const [currentUrl, setCurrentUrl] = useSearchParams();

    const handleSort = (event) => {
        setSortOption(event.target.value)
        setCurrentUrl(`sort_by=${event.target.value}`);
    }

    const handleOrder = (event) => {
        setOrderOption(event.target.value);
        setCurrentUrl((currUrl) => {
           let localCurrUrlCopy = currUrl;
           localCurrUrlCopy.set('order', []);
           return localCurrUrlCopy += event.target.value;
        })
    }

    useEffect(() => {
        API.getSortedArticles(sortOption)
        .then((sortedArticles) => {
            setDisplayedArticles(sortedArticles);
        })
    }, [sortOption])
    
    useEffect(() => {
        API.getSortedArticles(sortOption, orderOption)
        .then((orderedArticles) => {
            setDisplayedArticles(orderedArticles);
            
        })
    }, [orderOption])

    return(
        <>
        <label htmlFor="sort_by">Sort By: 
            <select onChange={handleSort} value={"sort_by"} name="sort_by" className="max-w-full mx-auto bg-red text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="sort-dropdown">
                <option className="text-base text-center block px-4 py-2" value="">Select An Option</option>
                <option className="text-base text-center block px-4 py-2" value="created_at">Date</option>
                <option className="text-base text-center block px-4 py-2" value="comment_count">Comments</option>
                <option className="text-base text-center block px-4 py-2" value="votes">Votes</option>
            </select>
        </label>

        <label htmlFor="order">Order: 
            <select onChange={handleOrder} value={"order"} name="order" className="max-w-full mx-auto bg-red text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="order-dropdown">
                <option className="text-base text-center block px-4 py-2" value="">Select An Option</option>
                <option className="text-base text-center block px-4 py-2" value="asc">Asc</option>
                <option className="text-base text-center block px-4 py-2" value="desc">Desc</option>
            </select>
        </label>
        </>
  )}
