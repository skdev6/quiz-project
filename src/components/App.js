import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signup' exact component={Signup}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/quize' exact component={Quiz}/>
          <Route path='/result' exact component={Result}/>
        </Switch>
      </Layout> 
    </Router>
  );
}

export default App;