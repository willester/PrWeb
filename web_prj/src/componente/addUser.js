import React, { Component } from 'react';
import {HashRouter as Router,Switch, Route} from 'react-router-dom'
import Test from './test';
import axios from 'axios';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
const HostIp=process.env.REACT_APP_IP;


class AddUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email:'',
            password:''
        }
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value,
           
        });
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
        window.location=`http://localhost:3000/#/test`;
      }


render(){
    return(
      //  <div> TEST ADD USER</div>
      <Router>
          <Switch>
        <div>
            <div className='add-user-layout'>
            Register
            <br/>
            <br/>

            <span className="p-float-label">
           
                <InputText id="idEmail" value={this.state.email} onChange={this.handleChangeEmail} />
                <label htmlFor="in">Email</label>
                <br/>
                <br/>
                <br/>
                <br/>
            </span>
            
                <span className="p-float-label">
                <InputText id="idUsername" value={this.state.username} onChange={this.handleChangeUsername} />
                <label htmlFor="idUsername">Username</label>
                <br/>
                <br/>
                <br/>
                <br/>
             </span>

             <span className="p-float-label">
                <InputText id="idPassword" value={this.state.password} onChange={this.handleChangePassword} />
                <label htmlFor="idPassword">Password</label>
                <br/>
                <br/>
                <br/>
                <br/>
             </span>

            <Button label="Register" onClick={this.addUser} />
                <br/>
                <br/>
           
                <Route path="/test" exact={true} >
                    <Test/>
                </Route>
                    </div>
                </div>
        </Switch>
        </Router>
             
          
    )
}


}

export default AddUser