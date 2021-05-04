import React from 'react'
import { Link } from "react-router-dom";
import TopicsBoardItem from "../TopicsBoardItem/TopicsBoardItem";
import style from "./topicsboard.module.scss"

const TopicsBoard = () => {
    return (
        <div className={style.topicsboard}>
            <h4>Topics</h4>
                <TopicsBoardItem/>
                <Link to='/topics' className={style.topics}>All topics</Link>
        </div>
    )
}

export default TopicsBoard;
