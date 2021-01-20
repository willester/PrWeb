import './App.css';
import Nav from './Nav';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Component } from 'react';
const HostIp=process.env.REACT_APP_IP;
const SERVER = 'http://localhost:8080'



class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {   
        user:{
        username: '',
        email:'',
        password:''
        },
        users: []
    }
}


 async addUser(user) {

    try{
        await fetch(`${SERVER}/users/register`, {
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

      

    //     axios.post(`${SERVER}/users`, user).then(res => {
    //     console.log(this.props)
    //     this.props.onUserAdded(user);
    //    //postman message
    //     console.log(res.data);
    //     //actual data
    //      console.log(res.config.data);
    //      alert("User Created!..GO to login")
        
    // }).catch(err => {
    //     console.log(err);
    // })
    // window.location.reload();
    //  window.location=`http://${SERVER}:3000/login`;
}

handleChangeEmail = (event) => {
    const user = this.state.user
    user.email = event.target.value
    console.log(user)
    
}
handleChangePassword = (event) => {
    const user = this.state.user
    user.password = event.target.value
    console.log(user)
}
handleChangeUsername = (event) => {
    const user = this.state.user
    user.username = event.target.value
    console.log(user)
}


  render(){
  return (
        <div className="Signup">
          <Nav />

          <div className="info">
          <label className="labels">email:</label>
          <br/>
          <input className="casetaalba" name="email" type="text" value={this.state.email} onChange={this.handleChangeEmail}/>
          <br/>
          <label className="labels">username:</label>
          <br/>
          <input className="casetaalba" name="username" type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
          <br/>
          <label id="password" className="labels">password:</label>
          <br/>
          <input id="password" className="casetaalba" name="password" type="text" value={this.state.password} onChange={this.handleChangePassword} />
          </div>


          <ul id="butoane">
          <Link to='/login'><li id="butonmic">login</li></Link>
          <Link to='/signup'><li id="butonmare" onClick={() => this.addUser(this.state.user)}>sign up</li></Link>
          </ul>

    <div className="textaccount">
      <p>Already have an account?</p>
    </div>

        </div>
      );
  }
}

export default Signup;
