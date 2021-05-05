import React, { useState, useEffect} from 'react'
import style from './topic.module.scss'
import { Link, useParams } from "react-router-dom"

const Topic = () => {
    const { topic } = useParams();

    const [posts, setPosts] = useState([])

    console.log(posts)
    useEffect(() => {
        const fetchFromApi = async () => {
            const postsFromServer = await fetchPosts()
            setPosts(postsFromServer)
        };
        fetchFromApi();
    }, []);


    const fetchPosts = async () => {
        const res = await fetch(`http://localhost:5000/topics`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        const data = await res.json();
        return data; // returned is a Promise so needs to be awaited & assigned to postsFromServer
    }

    return (
        
        <div className={style.topic}>
            {/* <div> */}

                
                <p>topic</p>
                <p>{topic}</p>
                {/* <p>{posts}</p> */}


                {posts.map( (post) => {
                    // <p>{post}</p>
                    post.posts_id.map( (post_id) => <p>{post_id}</p>
                    )
                } )}

                {/* <p>{post["posts_id"]}</p> */}
                
            {/* </div> */}
        </div>

    )
}

export default Topic;