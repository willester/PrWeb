import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Projects from './Projects';
import Teams from './Teams';
import Bugs from './Bugs';
import Profile from './Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <div class="logo">
			</div>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/teams" component={Teams}/>
      <Route path="/bugs" component={Bugs}/>
      <Route path="/profile" component={Profile}/>
      </Switch>

    </div>
    </Router>
  );
}






export default App;
