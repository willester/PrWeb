import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';


function Projects() {
  return (
    <div className="projectspage">
      <Nav2 />
        <Link to ="./profile"> <div class="profileicon"></div></Link>

    <div className="stanga">
        <p>aici ar trebui <br/> sa avem o lista <br/> de proiecte <br/> responsive gen 
        <br/> care poate fi updatata etc </p>
    </div>

    <div className="main">
        <p>here are the main projects</p>
    </div>

      </div>
  );
}

export default Projects;
