import React, { useState, useEffect} from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Topic from '../components/Topic/Topic';
// import { useRouteMatch } from 'react-router'
import style from "../styles/pagesStyles/topicspage.module.scss"


const TopicsPage = () => {
    const { url, path } = useRouteMatch();
    console.log('url', url)
    console.log('path', path)

    const [topics, setTopics] = useState([]);

    console.log(topics)

    // use fetch to go to route
    useEffect(() => {
        const fetchFromApi = async () => {
            const topicsFromServer = await fetchTopics(); // the awaited Promise would be fulfilled and assigned to topicsFromServer
            setTopics(topicsFromServer)
        };
        fetchFromApi();
    }, []);


    const fetchTopics = async () => {
        const res = await fetch(`http://localhost:5000/topics`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        const data = await res.json();
        // setFetch
        return data; // returned is a Promise so needs to be awaited & assigned to topicsFromServer
    }

    return (
        <div className={style.topics}>
            <div className={style.welcome}>
                All topics listed from A to Z
            </div>
            <ul>
                
                {topics.map( (topic) => <li>
                    <Link to={`${url}/${topic.title}`}>{ topic.title }</Link>
                    </li> )}

                {/* <li>
                    <Link to={`${url}/chocolates`}>Chocolates</Link>
                </li>
                <li>
                    <Link to={`${url}/crisps`}>Crisps</Link>
                </li> */}
            </ul>

            <Switch>
                <Route path={`${path}/:topic`} render={(props) => ( // instead of component we use render to be able to pass down props
                    <Topic />
                )}/>
            </Switch>



        </div>

    )
}

export default TopicsPage