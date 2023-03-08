import { Link } from "react-router-dom";
import logo from "../images/SnipeLogo.png"

function Navbar() {
    return (
      <nav className="navbarContainer">
        <img src={logo} alt="logo"/>
        <div className="searchBar"></div>
        <Link to={'/'} className='regLinks'>Home</Link>
        <Link to={'/collection-analytics'} className='regLinks'>Collections</Link>
        <Link to={'/top-sales'} className='regLinks'>Sales</Link>
        <Link to={'/blog'} className='regLinks'>Forum</Link>

        <Link to={'/signup'} className='specLinks'>Signup</Link>
        <Link to={'/login'} className='specLinks'>Login</Link>

        {/* <Link to={'/profile'}>Profile</Link>
        <Link to={'/logout'}>Logout</Link> */}




      </nav>
    );
  }
  
  export default Navbar;