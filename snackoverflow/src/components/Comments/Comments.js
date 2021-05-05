import React, { useState, useEffect, useParams } from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import style from './comments.module.scss'

const Comments = () => {
    const { url, path } = useRouteMatch();
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchFromApi = async () => {
            const commentsFromServer = await fetchComments()
            setComments(commentsFromServer)
        };
        fetchFromApi();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        const data = await res.json();
        console.log(url)
        console.log(data)
        return data; // returned is a Promise so needs to be awaited & assigned to commentsFromServer
    }

    console.log(comments)
    return (
        <div className={style.comments}>
            <p>All Comments</p>
            {comments.map((comment, key) => <p key={key}>{comment.title}</p>)}
                 
        </div>
    )
}

export default Comments;