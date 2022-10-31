import { useEffect, useState } from 'react';
import * as API from '../utils/api';

export default function Topics () {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        API.getTopics()
        .then((topicsData) => {
            setTopics(topicsData);
            setIsLoading(false);
        })
    }, [])

    if(isLoading) {
        return <h1> Loading Topics...</h1> 
    }
    
    else {
        return (
            <ul className="bg-slate-100 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2">
                {topics.map(({ slug }) => { return (<li key={slug}><h1>{slug}</h1></li>)})}
            </ul>
        )
    }
    

}