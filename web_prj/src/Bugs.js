import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';

function Bugs() {
  return (
    <div className="bugs">
      <Nav2 />
      <Link to ="./profile"> <div class="profileicon"></div></Link>

        <div className="stanga"><p>bugs</p></div>
        <div className="main"></div>



      </div>
  );
}

export default Bugs;
