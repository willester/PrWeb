import './App.css';
import {Link} from 'react-router-dom';

function NavHome() {
  return (
      <div className="navHome">
    <nav>
        
        <ul className="linkshome">
            <Link to='/home'><li>home</li></Link>
            <Link to='/about'><li>about us</li></Link>
            <Link to='/contact'><li>contact</li></Link>
        </ul>
    </nav>
    </div>
  );
}

export default NavHome;
