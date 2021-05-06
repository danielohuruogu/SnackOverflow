import React, { useState, useEffect} from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import style from "../styles/pagesStyles/topicspage.module.scss"
import SidePanel from "../components/SidePanel/SidePanel"

const TopicsPage = () => {
    const [topics, setTopics] = useState([]);

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
        return data; // returned is a Promise so needs to be awaited & assigned to topicsFromServer
    }

    return (
        <div className={style.topicspage}>
            <div className={style.panel}>
                <div className={style.welcome}>
                    All topics listed from A to Z
                </div>
                <ul>
                    {topics.map((topic, key) => 
                        <li className={style.topicsList} key={key}>
                            <Link to={`/topics/${topic._id['$oid']}/posts`}>{ topic.title }</Link>
                        </li> )}
                </ul>
            </div>
            <SidePanel/>
        </div>
    )
}

export default TopicsPage