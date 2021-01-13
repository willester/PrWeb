import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        
        <ul className="links">
            <Link to='/home'><li>home</li></Link>
            <Link to='/about'><li>about</li></Link>
            <Link to='/contact'><li>contact</li></Link>
            <Link to='/login'><li>login</li></Link>
            <Link to='/signup'><li>sign up</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
