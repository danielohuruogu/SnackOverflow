import React, { useState, useEffect, useParams } from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import style from './posts.module.scss'

const Posts = () => {
    const { url, path } = useRouteMatch();
    const [posts, setPosts] = useState([])

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

    return (
        <div className={style.posts}>
            <div>
                <p>All Posts</p>
            </div>
            <ul>

            </ul>
            {posts.map((post, key) => 
            <li key={key}>
                <Link to={''}>{post.title}</Link></li>)}
        </div>

            // <Link to={`/topics/${topic._id['$oid']}/posts`}>{ topic.title }</Link>

    )
}

export default Posts;
