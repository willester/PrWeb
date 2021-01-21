import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';
import { Component } from 'react';

const SERVER = 'http://localhost:8080'

class Bugs extends Component {
  constructor(props){
    super(props)
    this.state = {   
        bugs: {}
    }
  }
    componentDidMount () {
      console.log("merge didmountu")
      this.getAll()
    }
    async getAll () {
      try {
        const response = await fetch(`${SERVER}/bugs`)
        const data = await response.json()
        this.bugs = data
        console.log(this.bugs)
  
      } catch (err) {
        console.warn(err)
        
      }
    }
  render(){
  return (
    <div className="bugs">
      <Nav2 />
      <Link to ="./profile"> <div class="profileicon"></div></Link>
      <div className="buttons">
  <Link>
  <div className="mareadd">
  <div className="add"></div>
  <p className="addtext">add</p>
  </div>
  </Link>
  
  <Link>
  <div className="mareremove">
  <div className="remove"></div>
  <p className="removetext">remove</p>
  </div>
  </Link>

  <Link>
  <div className="mareedit">
  <div className="edit"></div>
  <p className="edittext">edit</p>
  </div>
  </Link>
  
  </div>
  
    <div className="stanga">
  
        <ul className="ul-stanga">
          <Link className="hey" to='/Teams'><li className="active">login</li></Link>
            <Link className="hey" to='/Teams'><li>some bug</li></Link>
            <Link className="hey" to='/Teams'><li>another bug</li></Link>
            <Link className="hey" to='/Teams'><li>too many bugs</li></Link>
        </ul>
        
        
    </div>
    
        <div className="main">
        <div className="linie3"></div>
          <p className="bugstext">bugs</p>
       
        </div>



    </div>
    );
  }
}

export default Bugs;
