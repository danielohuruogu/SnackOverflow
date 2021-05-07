import React, { useState, useEffect, useParams } from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import style from './comments.module.scss'

const Comments = () => {
    const { url, path } = useRouteMatch();
    const [comments, setComments] = useState([])
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchFromApi = async () => {
            const commentsFromServer = await fetchComments()
            setComments(commentsFromServer)
            const postFromServer = await fetchChosenPost()
            setPost(postFromServer)
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
        return data; // returned is a Promise so needs to be awaited & assigned to commentsFromServer
    }

    const removeLastDirectoryPartOf = (url) => {
        const topics_url = url.split('/');
        topics_url.pop()
        return topics_url.join('/')
    }

    const fetchChosenPost = async () => {
        const res = await fetch(removeLastDirectoryPartOf(url), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        const post_data = await res.json();
        return post_data; // returned is a Promise so needs to be awaited & assigned to commentsFromServer
    }

    return (
        <div className={style.comments}>
            <div>
                <p className={style.title}>{post.title}</p>

                <p dangerouslySetInnerHTML={{
                    __html: post.post_body
                }}></p>      
            </div>
            <div>
                <p className={style.subtitles}>All Comments:</p>
                <ul>
                    {comments.map((comment, key) => <li className={style.contentsList} key={key}>{comment.text}</li>)}
                </ul>
            </div>
                 
        </div>
    )
}

export default Comments;