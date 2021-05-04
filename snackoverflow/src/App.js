import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage"
import TopicsPage from "./pages/TopicsPage"

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import style from "./styles/app.module.scss";


function App() {

  return (
    <div className={style.App}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/topics" component={TopicsPage} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
