import Comments from "../components/Comments/Comments"
import SidePanel from "../components/SidePanel/SidePanel"
import style from "../styles/pagesStyles/commentspage.module.scss"

const CommentsPage = () => {
    return (
        <div className={style.commentspage}>
            <div className={style.desc}>
                <p>this is the comments page</p>
            </div>
            <Comments/>
            <SidePanel/>
        </div>
    )
}

export default CommentsPage