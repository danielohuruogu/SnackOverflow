import SidePanel from "../components/SidePanel/SidePanel"
import TopicsBoard from "../components/TopicsBoard/TopicsBoard"
import style from "../styles/pagesStyles/homepage.module.scss"

const HomePage = () => {
    return (
        <div className={style.homepage}>
            <div className={style.welcome}>
                <p>Welcome to Snack Overflow! Home of snack enthusiasts to discuss all things snacks related.</p>
            </div>
            <TopicsBoard/>
            <div className={style.separator}>
            <SidePanel/>
            </div>

        </div>
    )
}

export default HomePage