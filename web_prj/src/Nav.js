import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
    <nav>
        
        <ul className="links">
            <Link to='/home'><li>home</li></Link>
            <Link to='/about'><li>about us</li></Link>
            <Link to='/contact'><li>contact</li></Link>
          
        </ul>
    </nav>
    </div>
  );
}

export default Nav;
