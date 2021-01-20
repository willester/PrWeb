import './App.css';
import Nav from './Nav';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Component } from 'react';
const HostIp=process.env.REACT_APP_IP;
const SERVER = 'http://localhost:8080'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:{
        username: '',
        password:''
      }
    }
  }
  async connectUser(user) {

    try{
        await fetch(`${SERVER}/users/logIn`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          window.location=`http://localhost:3000/projects/${user.username}`;
          
        }
    catch (err) {
        console.warn(err)
        this.emitter.emit('ADD_ONE_ERROR')
      }
    }

handleChangePassword = (event) => {
    const user = this.state.user
    user.password= event.target.value
}
handleChangeUsername = (event) => {
    const user = this.state.user
    user.username = event.target.value
}

  // getUser = () => {
  //   const user = this.state;
  //   axios.post(`http://${HostIp}:8080/api/user`, user).then(res => {
  //       this.props.onUserAdded(user);
  //       console.log(res.data);
  //        console.log(res.config.data);
  //        alert("User Created!..GO to login")
  //   }).catch(err => {
  //       console.log(err);
  //   })
  //   window.location=`http://localhost:3000/projects`
  // }


  render(){
  return (
    <div className="Login">
      <Nav />

      <div className="info">
        <label className="labels">username:</label>
      <br/>
        <input className="casetaalba" name="username" type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
      <br/>
        <label id="password" className="labels">password:</label>
      <br/>
        <input id="password" className="casetaalba" name="password" type="text" value={this.state.password} onChange={this.handleChangePassword}/>
      </div>

      <div className="textaccount">
        <p>Don't have an account?</p>
      </div>

      <ul id="butoane">

            <Link to='/login'><li id="butonmare" onClick={() => this.connectUser(this.state.user)}>login</li></Link>
            <Link to='/signup'><li id="butonmic">sign up</li></Link>

      </ul>

          </div>
    );
  }
}

export default Login;
