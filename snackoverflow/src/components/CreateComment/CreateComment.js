import React, { useState, useEffect, useSelector } from 'react'
import style from './createcomment.module.scss'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useRouteMatch } from 'react-router';


const CreateComment = () => {
    const { url, path } = useRouteMatch();

    const [text, setText] = useState("")
    const [user_id, setUser_id] = useState({
        "$oid": "6093244280a5c197e580c733" // currently this is fixed unless we have a signed in user
    })
    const [post_id, setPost_id] = useState({
        "$oid": ""
    })

    const addComment = async (comment_data) => {
        console.log(comment_data);
        let resBody = JSON.stringify(comment_data);
        const res = await fetch("/comments", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "Accept": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: resBody,
        });
        const data = await res.json();
        console.log(data)
    }

    const submitComment = (e) => {
        console.log("submitting new post");
        e.preventDefault();

        addComment({
            text,
            user_id,
            post_id,
        })
    }

    const getPostId = (url) => {
        const post_comments_url = url.split('/');
        post_comments_url.pop()
        post_comments_url.shift()
        post_comments_url.shift()
        const post_id_from_url = post_comments_url[0]
        console.log(post_id_from_url)
        return post_id_from_url
    }

    const postIdValue = getPostId(url)
    const postIdDict = {}
    postIdDict["$oid"] = postIdValue.toString()
    const setThePostIdState = () => setPost_id(postIdDict)

    useEffect(() => {
        setThePostIdState()
    }, []);

    return (
        <div className={style.createcomment}>
            <form onSubmit={
                (e) => {

                    submitComment(e)
                }
            }>
                <label>Title</label>
                <input placeholder="Comment nhere!" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <div>
                    <input type="submit" value="Submit Comment"/>
                </div>  
            </form>
        </div>
    )
}


export default CreateComment;