import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';

function Profile() {
  return (
    <div className="profile">
      <Nav2 />
      <h1>profile</h1>
      <Link to ="./profile"> <div class="profileicon"></div></Link>
      </div>
  );
}

export default Profile;
