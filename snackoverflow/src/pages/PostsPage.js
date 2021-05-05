import Posts from "../components/Posts/Posts"
import SidePanel from "../components/SidePanel/SidePanel"
import style from "../styles/pagesStyles/postspage.module.scss"

const PostsPage = () => {
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
