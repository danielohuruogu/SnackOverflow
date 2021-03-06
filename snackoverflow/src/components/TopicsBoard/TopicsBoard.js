import React from 'react'
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import PostsPage from '../../pages/PostsPage';
import TopicsBoardItem from "../TopicsBoardItem/TopicsBoardItem";
import style from "./topicsboard.module.scss"


const TopicsBoard = () => {
    return (
        <div className={style.topicsboard}>
            <div className={style.titles}>Topics</div>
                <TopicsBoardItem/>
                <Link to='/topics' className={style.alltopics}>All topics</Link>
                
        
        </div>
    )



}

export default TopicsBoard;
