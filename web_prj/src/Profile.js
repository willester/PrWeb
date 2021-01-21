import './App.css';
import Nav2 from './Nav2';
import {Link} from 'react-router-dom';

function Profile() {
  return (
    <div className="profile">
      <Nav2 />
      <Link to ="./profile"> <div class="profileicon"></div></Link>
      
    <h1 className="prof">Profile page</h1>

      <div className="stanga2">

      <div className="labelstanga">
          <ul className="ul-stanga">
          <Link className="hey" to='/Projects'><li className="active">Information</li></Link>
            <Link className="hey" to='/Projects'><li>Settings</li></Link>
            <Link className="hey" to='/Projects'><li>FAQ</li></Link>
            <Link className="hey" to='/Projects'><li>Help</li></Link>
          </ul>
        </div>

      </div>
      <div className="main2">

<div className="titles">
  <p className="title">Username:  <br/> <br/></p> 
  <p className="title">Email:  <br/> <br/></p> 
  <p className="title">Phone number:</p> 

</div>

<div className="edit1"></div>
<div className="edit2"></div>
<div className="edit3"></div>


<ul className="ul-dreapta">
            <li className="hey2">username</li>
            <li className="hey2">email</li>
            <li className="hey2">phone</li>
            <Link className="hey2" to='/Projects'><li className="active">Change password</li></Link>
            </ul>
      </div>
      
      
      </div>
  );
}

export default Profile;
