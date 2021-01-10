import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

const HostIp=process.env.REACT_APP_IP;


class Login extends Component{
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

//     de modificat

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
      }


render(){
    return(
      //  <div> TEST ADD USER</div>

      

        <div>
            <div className='add-user-layout'>
            Log in 
            <br/>
            <br/>

            
            
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

            <Button label="Log in" onClick={this.addUser} />
                <br/>
                <br/>
          
             
            </div>
        </div>
    )
}


}

export default Login