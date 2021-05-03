import React from 'react'
import TopicsBoardItem from "../TopicsBoardItem/TopicsBoardItem";
import style from "./topicsboard.module.scss"

const TopicsBoard = () => {
    return (
        <div className={style.topicsboard}>
            <h4>Topics</h4>
                <TopicsBoardItem/>
        </div>
    )
}

export default TopicsBoard;
