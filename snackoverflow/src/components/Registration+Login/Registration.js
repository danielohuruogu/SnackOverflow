import React, { useState, useEffect} from 'react'
import style from './registration.module.scss'
import { Link, useParams } from "react-router-dom"

const Topic = () => {
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
        
        <div className={style.registrationpage}>
            <p>registration page</p>

        </div>

    )
}

export default Topic;