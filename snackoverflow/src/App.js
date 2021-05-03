import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Header from "./components/Header/Header";

function App() {

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
