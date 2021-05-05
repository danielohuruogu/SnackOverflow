import React, { useState, useEffect, useParams } from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'

import style from './posts.module.scss'

const Posts = () => {
    // const { topic_id } = useParams();
    const { url, path } = useRouteMatch();

    const [posts, setPosts] = useState([])

    // console.log(posts)
    useEffect(() => {
        const fetchFromApi = async () => {
            const postsFromServer = await fetchPosts()
            setPosts(postsFromServer)
        };
        fetchFromApi();
    }, []);


    const fetchPosts = async () => {
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
        return data; // returned is a Promise so needs to be awaited & assigned to postsFromServer
    }

    console.log(posts)
    return (
        <div className={style.posts}>
               
            <p>All Posts</p>

            {posts.map((post, key) => <p key={key}>{post.title}</p>)}
                 

        </div>

    )
}

export default Posts;