import Posts from "../components/Posts/Posts"
import SidePanel from "../components/SidePanel/SidePanel"
import style from "../styles/pagesStyles/postspage.module.scss"

const PostsPage = () => {
    return (
        <div className={style.postspage}>
            <Posts/>
            <SidePanel/>
        </div>
    )
}

export default PostsPage
