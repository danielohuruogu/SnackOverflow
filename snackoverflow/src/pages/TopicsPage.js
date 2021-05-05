import React, { useState, useEffect} from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Topic from '../components/Topic/Topic';
// import { useRouteMatch } from 'react-router'
import style from "../styles/pagesStyles/topicspage.module.scss"


const TopicsPage = () => {
    const { url, path } = useRouteMatch();
    console.log('url', url)
    console.log('path', path)

    // const [fetched, setFetched] = useState(false);

    // use fetch to go to route
    useEffect(() => {

    }, [])


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
        return data;
    }
    const data = fetchTopics()
    // console.log(fetchTopics())
    console.log(data)
    console.log('hello from Johnny')
    return (
        <div className={style.topics}>
            <div className={style.welcome}>
                All topics listed from A to Z
            </div>
            <ul>
                
                {/* {data.map( topic => <li> { topic.name } </li> )} */}

                <li>Biscuits</li>
                <li>Cakes</li>
                <li>Candies</li>
                <li>Chewing Gums</li>
                <li>
                    <Link to={`${url}/chocolates`}>Chocolates</Link>
                </li>
                <li>Crackers</li>
                <li>
                    <Link to={`${url}/crisps`}>Crisps</Link>
                </li>
                <li>Nuts and Seeds</li>
                <li>Popcorns</li>
                <li>Shreds</li>
            </ul>

            <Switch>
                <Route path={`${path}/:topic`} component={Topic}/>
            </Switch>



        </div>

    )
}

export default TopicsPage