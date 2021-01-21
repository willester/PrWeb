import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';

function Teams() {
  return (
    <div className="teams">
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
          <Link className="hey" to='/Teams'><li className="active">AWA</li></Link>
            <Link className="hey" to='/Teams'><li>Smoto&Friends</li></Link>
            <Link className="hey" to='/Teams'><li>WeGotThis</li></Link>
            <Link className="hey" to='/Teams'><li>Tech Guys</li></Link>
          </ul>

</div>

<div className="main">
  <p className="teamstext">team members</p>
  <div className="linie2"></div>

</div>

      </div>
  );
}

export default Teams;
