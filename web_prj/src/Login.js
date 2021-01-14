import './App.css';
import Nav from './Nav';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Component } from 'react';
const HostIp=process.env.REACT_APP_IP;

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
        username: '',
        password:''
    }
}


handleChangePassword = (event) => {
    this.setState({
        password: event.target.value
    });
}
handleChangeUsername = (event) => {
    this.setState({
        username: event.target.value
    });
}

  addUser = () => {
    const user = this.state;
    axios.post(`http://${HostIp}:8080/api/user`, user).then(res => {
        this.props.onUserAdded(user);
        console.log(res.data);
         console.log(res.config.data);
         alert("User Created!..GO to login")
    }).catch(err => {
        console.log(err);
    })
    window.location=`http://localhost:3000/projects`
  }
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

            <Link to='/login'><li id="butonmare" onClick={this.addUser}>login</li></Link>
            <Link to='/signup'><li id="butonmic">sign up</li></Link>

      </ul>

          </div>
    );
  }
}

export default Login;
