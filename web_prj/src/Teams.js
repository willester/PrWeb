import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';

function Teams() {
  return (
    <div className="teams">
      <Nav2 />
      <Link to ="./profile"> <div class="profileicon"></div></Link>

<div className="stanga"><p>teams</p></div>
<div className="main"></div>

      </div>
  );
}

export default Teams;
