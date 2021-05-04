import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router'
import style from "../styles/pagesStyles/topicspage.module.scss"


const TopicsPage = () => {
    const { url, path } = useRouteMatch();

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
                    <Link to={'${url}/Crisps'}>Crisps</Link>
                    </li>
                <li>Nuts and Seeds</li>
                <li>Popcorns</li>
                <li>Shreds</li>
            </ul>
        </div>

    )
}

export default TopicsPage