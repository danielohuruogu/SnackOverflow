import React from 'react'
import style from './topic.module.scss'
import { Link, useParams } from "react-router-dom"

const Topic = () => {
    console.log('hello');
    const { topic } = useParams();



    return (
        
        <div className={style.topic}>
            {/* <div> */}

                
                <p>topic</p>
                <p>{topic}</p>
                


                
            {/* </div> */}
        </div>

    )
}

export default Topic;