import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';

function Bugs() {
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

export default Bugs;
