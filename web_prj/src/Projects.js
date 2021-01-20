import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';
import { Component } from 'react';

const SERVER = 'http://localhost:8080'

class Projects extends Component {

  constructor(props){
    super(props)
    this.state = {   
        proiecte: {}
    }
}


  componentDidMount () {
    console.log("merge didmountu")
    this.getAll()
  }

  async getAll () {
    try {
      const response = await fetch(`${SERVER}/projects`)
      const data = await response.json()
      this.proiecte = data
      console.log(this.proiecte)

    } catch (err) {
      console.warn(err)
      
    }
  }

  async getAll2 () {
    try {
      const response = await fetch(`${SERVER}/projects`)
      const data = await response.json()
      const prj = data
      return prj

    } catch (err) {
      console.warn(err)
      
    }
  }



  render(){
  return (
    <div className="projectspage">
      <Nav2 />
        <Link to ="./profile"> <div class="profileicon"></div></Link>

    <div className="stanga">
        <p>aici ar trebui <br/> sa avem o lista <br/> de proiecte <br/> responsive gen 
        <br/> care poate fi updatata etc </p>

        



       <div> {`${this.getAll2()}`} </div>
 



    </div>

    <div className="main">
        <p>here are the main projects</p>
    </div>

      </div>
  );
}

}

export default Projects;
