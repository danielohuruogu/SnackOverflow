import React from 'react'
import TopicsBoardItem from "../TopicsBoardItem/TopicsBoardItem";
import style from "./topicsboard.module.scss"

const TopicsBoard = () => {
    return (
        <div className={style.topicsboard}>
            <h4>Topics</h4>
                <TopicsBoardItem/>
            <h4>Other topics</h4>
        </div>
    )
}

export default TopicsBoard;
