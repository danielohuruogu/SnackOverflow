import Comments from "../components/Comments/Comments"
import SidePanel from "../components/SidePanel/SidePanel"
import style from "../styles/pagesStyles/commentspage.module.scss"

const CommentsPage = () => {
    return (
        <div className={style.commentspage}>
            <Comments className={style.separator}/>
            <SidePanel/>
        </div>
    )
}

export default CommentsPage