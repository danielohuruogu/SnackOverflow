import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import style from "./styles/app.module.scss";

function App() {

  return (
    <div className={style.App}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
