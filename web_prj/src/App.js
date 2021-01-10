import {Button} from 'primereact/button';
import React, { Component } from 'react';
import { NavLink,Router, Switch, Route, HashRouter,Link} from 'react-router-dom'
import AddUser from './componente/RegPage/addUser';
import Login from './componente/LogInPage/logInUser';
import axios from 'axios';
import './App.css';
import Test from './Test'
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
    return(
      // <div className="App">
      //   <Router>
      //     <Switch>
      //       <Route path="/" exact={true}>
      //       <div className="root-page">
      //    I dunno how you got there
      //     <br/>
      //     <br/>
      //     <Button label="Login" onClick={this.goToLogin}/>
      //     <br/>
      //     <br/>
      //      <Button label="Register" onClick={<addUser />}/>
      //      <br/>
      //      <br/>
      //     </div>
      //       </Route>

            
        



      //     </Switch>
      //   </Router>
      // </div>

      <>

      {/* <Router>
      <Switch>
      <div>TESTU DIN APP </div>
      <button onClick={this.goToTest}>test</button>

      <div id="TEST" style={{display: 'block'}} >
      <AddUser />
      </div>




      </Switch>
      </Router> */}
      
      <HashRouter>
        
         {/* metoda cu navLink */}

      {/* <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/register'>Stuff</NavLink></li> */}

      {/* metoda cu link atasat de buton */}

      <Link to="/home">
     <button type="button">
         Home
     </button>  
      </Link>


      <Link to="/register">
     <button type="button">
          Register
     </button>  
      </Link>
      
      <Link to="/login">
     <button type="button">
          Login
     </button>  
      </Link>

      <br />



      <Route exact path="/home" component={Test}/>
      <Route path="/register" component={AddUser}/>
      <Route path="/login" component={Login}/>

      </HashRouter>
      </>
    )
  }
}

export default App;
