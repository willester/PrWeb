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

  async getAll2() {
    try {
      const response = await fetch(`${SERVER}/projects`)
      const data = await response.json()
      const prj = data
      return prj

    } catch (err) {
      console.warn(err)
      
    }
  }



  printProjectNames(array)
  {
    let stringReturnat = ''
    
    console.log(array.value)

    if(array)
    {  
      for(let i in array)
      {
        stringReturnat += i
        stringReturnat += "\n"
      }
    }
    return stringReturnat
  }


  render(){
  return (
    <div className="projectspage">
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



        <div className="labelstanga">
          <ul className="ul-stanga">
          <Link className="hey" to='/Projects'><li className="active">Web Tech</li></Link>
            <Link className="hey" to='/Projects'><li>Multimedia</li></Link>
            <Link className="hey" to='/Projects'><li>Android</li></Link>
            <Link className="hey" to='/Projects'><li>Econometrics</li></Link>
            <Link className="hey" to='/Projects'><li>Cybernetics</li></Link>
          </ul>
        </div>

      <div>{`${this.getAll2()}`}</div>

       <div> {`${this.printProjectNames(this.getAll2())}`} </div>
 



    </div>

    <div className="main">
    <div className="linie"></div>
        <p className="projectstext">Web Tech Project</p>
        <p className="description">Description.</p>
        <p className="github">Link GitHub.</p>
    


    </div>

      </div>
  );
}

}

export default Projects;
