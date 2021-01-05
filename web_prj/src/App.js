import {Button} from 'primereact/button';
import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import addUser from './componente/RegPage/addUser';
import axios from 'axios';
import './App.css';
const HostIp=process.env.REACT_APP_IP;


class App extends Component {
  constructor(props){
    super(props)
    this.state  = { 
      users:[],
      loggedUser:{},
      team:{}
  }
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

  render()
  {
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact={true}>
            <div className="root-page">
         I dunno how you got there
          <br/>
          <br/>
          <Button label="Login" onClick={this.goToLogin}/>
          <br/>
          <br/>
           <Button label="Register" onClick={this.goToRegister}/>
           <br/>
           <br/>
          </div>
            </Route>




          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
