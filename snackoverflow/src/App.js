import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage"
import TopicsPage from "./pages/TopicsPage"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import style from "./styles/app.module.scss";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";


function App() {

  return (
    <div className={style.App}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/topics/:topic_id/posts" component={PostsPage} />
        <Route path="/topics" component={TopicsPage} />
        <Route path="/posts/:post_id/comments" component={CommentsPage} />
        <Route path="/posts" component={PostsPage} />
        {/* <Route path="/posts" component={PostsPage} /> */}
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
