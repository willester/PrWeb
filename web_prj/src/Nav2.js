import './App.css';
import {Link} from 'react-router-dom';

function Nav2() {
  return (
    <div className="nav2">
    <nav>
        
        <ul className="links2">
            <Link to='/projects'><li>projects</li></Link>
            <Link to='/teams'><li>teams</li></Link>
            <Link to='/bugs'><li>bugs</li></Link>
            <Link to='/home'><li>logout</li></Link>
          
        </ul>
    </nav>
    </div>
  );
}

export default Nav2;
