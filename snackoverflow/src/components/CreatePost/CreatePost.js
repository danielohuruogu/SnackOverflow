import React, { useState, useEffect, useSelector } from 'react'
import style from './createpost.module.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { useRouteMatch } from 'react-router';
import QuillEditor from '../QuillEditor/QuillEditor';



const CreatePost = () => {
    // const user = useSelector(state => state.user)

    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])

    const onEditorChange = (value) => {
        setContent(value)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setContent("")
        console.log('submitted')
        // if(user.userData && !user.userData.isAuth) {
        //     return alert('Please Log in first!')
        // }
        // const variables = {
        //     content: content,
        //     userID: user.userData._id
        // }
        // axios.post('api/blog/createPost', variables)
        // .then()
    }
    // const quill = new Quill

    return (
        <div className={style.createpost}>
            {/* <form>
                <input placeholder="Write a new post!" type="text"></input>
            </form> */}
        <div>
            Editor
        </div>

        <QuillEditor
            placeholder={"Start Posting Something"}
            onEditorChange={onEditorChange}
            onFilesChange={onFilesChange}
        />

        <form
        onSubmit={onSubmit}
        >
            <div>
                <button>
                    Submit
                </button>
            </div>
        </form>

        </div>

    )
}

export default CreatePost;