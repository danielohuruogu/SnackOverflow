import React, { useState, useEffect, useParams } from 'react'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import style from './posts.module.scss'

const Posts = () => {
    const { url, path } = useRouteMatch();
    const [posts, setPosts] = useState([])
    const [topic, setTopics] = useState({})

    useEffect(() => {
        const fetchFromApi = async () => {
            const postsFromServer = await fetchPosts()
            setPosts(postsFromServer)
            const topicFromServer = await fetchChosenTopic()
            setTopics(topicFromServer)
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
        const posts_data = await res.json();
        return posts_data; // returned is a Promise so needs to be awaited & assigned to postsFromServer
    }

    const removeLastDirectoryPartOf = (url) => {
        const topics_url = url.split('/');
        topics_url.pop()
        return topics_url.join('/')
    }

    const fetchChosenTopic = async () => {
        const res = await fetch(removeLastDirectoryPartOf(url), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        const topic_data = await res.json();
        return topic_data; // returned is a Promise so needs to be awaited & assigned to postsFromServer
    }

    return (
        <div className={style.posts}>
            <div>
                <p className={style.title}>All Posts for {topic.title}</p>
            </div>

            <ul>
                {posts.map((post, key) => 
                <li className={style.contentsList} key={key}>
                    <Link to={`/posts/${post._id['$oid']}/comments`}>{post.title}</Link>
                </li>)}
            </ul>
        </div>

            // <Link to={`/topics/${topic._id['$oid']}/posts`}>{ topic.title }</Link>
    )
}

export default Posts;
