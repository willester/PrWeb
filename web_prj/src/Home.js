import './App.css';
import NavHome from './NavHome';
import Login from './Login';
import Signup from './Signup';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <NavHome />
      <p className="message"> You got a bug? We can fix it! <br/> Join our community and help other developers!</p>
      <ul id="butoane">

    
      <Link to='/login'><li id="login">login</li></Link>
      <Link to='/signup'><li id="signup">sign up</li></Link>
      <Switch>
      <Router>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      </Router>
      </Switch>
</ul>
    </div>
  );
}

export default Home;
