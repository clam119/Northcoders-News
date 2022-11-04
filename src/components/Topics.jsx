import { useEffect, useState } from 'react';
import * as API from '../utils/api';
import ErrorPage from './ErrorPage';
import TopicCard from './TopicCard';

export default function Topics () {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        API.getTopics()
        .then((topicsData) => {
            setTopics(topicsData);
            setIsLoading(false);
        })
        .catch((err) => {
            setError(err);
            setHasError(true);
        })
    }, [])

    if(isLoading) {
        return <h1> Loading Topics...</h1> 
    }
    
    if(hasError) {
        return <ErrorPage />
    }

    else {
        return (
            <ul className="bg-slate-100 mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 sm:grid-cols-1">
                {topics.map(({ slug }, index) => { return <TopicCard key={index} slug={slug} />})}
           </ul>
        )
    }
    

}