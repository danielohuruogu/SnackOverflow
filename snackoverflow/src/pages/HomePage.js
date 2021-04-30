import SidePanel from "../components/SidePanel/SidePanel"
import TopicsBoard from "../components/TopicsBoard/TopicsBoard"

const HomePage = () => {
    return (
        <div>
            <p>Welcome to Snack Overflow! Home of snack enthusiasts to discuss all things snacks.</p>
        
            <TopicsBoard/>

            <SidePanel/>
        </div>

    )
}

export default HomePage