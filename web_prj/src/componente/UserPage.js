import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
const HostIp=process.env.REACT_APP_IP;

class UserPage extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            teams:[],
            projects:[]
        }
    }

    render()
    {
        return(
            <>

            <div>TEST DIN USERPAGE</div>

            </>
        )
    }




}




export default UserPage