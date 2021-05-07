import React, { useState, useEffect, useSelector } from 'react'
import style from './createpost.module.scss'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useRouteMatch } from 'react-router';
import QuillEditor from '../QuillEditor/QuillEditor';
import ReactQuill, { Quill } from 'react-quill';


const CreatePost = () => {
    const { url, path } = useRouteMatch();

    const [title, setTitle] = useState("")
    const [user_id, setUser_id] = useState({
        "$oid": "6093244280a5c197e580c733" // currently this is fixed unless we have a signed in user
    })
    const [post_body, setPost_Body] = useState("")
    const [topic_id, setTopic_id] = useState({
        "$oid": ""
    })

    const handleBody = (e) => {
        console.log(e)
        setPost_Body(e)
    }

    const addPost = async (post_data) => {
        console.log(post_data);
        let resBody = JSON.stringify(post_data);
        const res = await fetch("/posts", {
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

    const submitPost = (e) => {
        console.log("submitting new post");
        e.preventDefault();

        addPost({
            title,
            user_id,
            post_body,
            topic_id,
        })
    }

    const getTopicId = (url) => {
        const topic_posts_url = url.split('/');
        topic_posts_url.pop()
        topic_posts_url.shift()
        topic_posts_url.shift()
        const topic_id_from_url = topic_posts_url[0]
        // console.log(topic_id_from_url)
        return topic_id_from_url
    }

    const topicIdValue = getTopicId(url)
    const topicIdDict = {}
    topicIdDict["$oid"] = topicIdValue.toString()
    const setTheTopicIdState = () => setTopic_id(topicIdDict)

    useEffect(() => {
        setTheTopicIdState()
    }, []);

    return (
        <div className={style.createpost}>
            <form onSubmit={
                (e) => {

                    submitPost(e)
                }
            }>
                <label className={style.title}>Title:</label>
                <input className={style.titleInput} placeholder="Give it a title!" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <ReactQuill placeholder="Please write something..." value={post_body} onChange={handleBody} />
                <div>
                    <input className={style.button} type="submit" value="Submit Post"/>
                </div>  
            </form>
                <div>
                    {post_body}
                </div>
        </div>
    )
}


export default CreatePost;