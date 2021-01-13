import {Button} from 'primereact/button';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './componente/Nav';
import About from './componente/About';
import Contact from './componente/Contact';
import AddUser from './componente/addUser';
import LoginUser from './componente/logInUser';
import axios from 'axios';
import './App.css';
import Test from './Test'
import Logo from './logo.png';
const HostIp=process.env.REACT_APP_IP;


class App extends Component {
  constructor(props){
    super(props)
    this.state  = { 
      users:[],
      loggedUser:{},
      team:{}
  };
  this.test = null
  this.viewForm = false
  
}




goToLogin=()=>{
  window.location=`http://${HostIp}:3000/#/login`;
}
goToRegister=()=>{
  window.location=`http://${HostIp}:3000/#/register`;
} 
goToRoot=()=>{
  window.location=`http://${HostIp}:3000/#/`;
}

goToTest = () => {
  console.log("TEST")
  this.test = <Test />
  this.viewForm = true
  let divTest = React.findDOMNode()  
}

  render()
  {
    // return(
    //   // <div className="App">
    //   //   <Router>
    //   //     <Switch>
    //   //       <Route path="/" exact={true}>
    //   //       <div className="root-page">
    //   //    I dunno how you got there
    //   //     <br/>
    //   //     <br/>
    //   //     <Button label="Login" onClick={this.goToLogin}/>
    //   //     <br/>
    //   //     <br/>
    //   //      <Button label="Register" onClick={<addUser />}/>
    //   //      <br/>
    //   //      <br/>
    //   //     </div>
    //   //       </Route>

            
        



    //   //     </Switch>
    //   //   </Router>
    //   // </div>

    //   <>

    //   {/* <Router>
    //   <Switch>
    //   <div>TESTU DIN APP </div>
    //   <button onClick={this.goToTest}>test</button>

    //   <div id="TEST" style={{display: 'block'}} >
    //   <AddUser />
    //   </div>




    //   </Switch>
    //   </Router> */}
      
    //   <HashRouter>
        
    //      {/* metoda cu navLink */}

    //   {/* <li><NavLink exact to='/'>Home</NavLink></li>
    //   <li><NavLink to='/register'>Stuff</NavLink></li> */}

    //   {/* metoda cu link atasat de buton */}

    //   <div className="Appp">
    //   <nav className="navbar">
        
    //   <img src={Logo} className="logo"/>

    //     <div className="links">
    //     <Link to="/home">home</Link>
    //         <a href="/aboutus">about us</a>
    //         <a href="/contact">contact</a>
    //         <Link to="/login">login</Link>
    //         <Link to="/register">sign up</Link>
    //     </div>
    // </nav>
    //   </div>

      
    //   <Link to="/login" className="loginbtn">login</Link>
    //         <Link to="/register" className="signupbtn">sign up</Link>

     
      
      

    //   <br />



    //   <Route exact path="/home" component={Test}/>
    //   <Route path="/register" component={AddUser}/>
    //   <Route path="/login" component={Login}/>

    //   </HashRouter>
      // </>
    //)
    return(
      <div className="App">
        <Router>
          <div>
          <h1>home page</h1>
            <p> You got a bug? We can fix it! <br/> Join our community and help other developers!</p>
            <ul id="butoane">
            <Link to='/login'><li id="login">login</li></Link>
            <Link to='/signup'><li id="signup">sign up</li></Link>
            <Nav/>
            <Switch>
                <Route path="/home" exact={true}>
                  <Route exact  component={Test}/>
                  <button label="Log In" onClick={this.goToLogin}/>
                  <button label="Sign Up" onClick={this.goToRegister}/>
                </Route>
                <Route path="/login" exact={true}>
                  <LoginUser logInUser={this.addUser}/>
                </Route>
                <Route path="/signup" exact={true}>
                  <AddUser/>
                </Route>
                <Route path="/about" exact={true}>
                  <About/>
                </Route>
                <Route path="/contact" exact={true}>
                  <Contact/>
                </Route>
            </Switch>
            </ul>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
