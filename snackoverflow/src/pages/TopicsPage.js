import React from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Crisps from '../components/Crisps/Crisps';
// import { useRouteMatch } from 'react-router'
import style from "../styles/pagesStyles/topicspage.module.scss"


const TopicsPage = () => {
    const { url, path } = useRouteMatch();
    console.log('url', url)
    console.log('path', path)
    return (
        <div className={style.topics}>
            <div className={style.welcome}>
                All topics listed from A to Z
            </div>
            <ul>
                <li>Biscuits</li>
                <li>Cakes</li>
                <li>Candies</li>
                <li>Chewing Gums</li>
                <li>Chocolates</li>
                <li>Crackers</li>
                <li>
                    <Link to={`${url}/crisps`}>Crisps</Link>
                    </li>
                <li>Nuts and Seeds</li>
                <li>Popcorns</li>
                <li>Shreds</li>
            </ul>

            <Switch>
                <Route path={`${path}/:crisps`} component={Crisps}/>
            </Switch>



        </div>

    )
}

export default TopicsPage