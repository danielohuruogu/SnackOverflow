import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'

import Posts from "../components/Posts/Posts"
import SidePanel from "../components/SidePanel/SidePanel"
import TopicsBoard from "../components/TopicsBoard/TopicsBoard"
import style from "../styles/pagesStyles/postspage.module.scss"

const PostsPage = () => {
    const { url, path } = useRouteMatch();
    return (
        <div className={style.postspage}>
            <div className={style.desc}>
                <p>this is the posts page</p>
            </div>
            
            <Posts/>

            <SidePanel/>

        </div>

    )
}

export default PostsPage
