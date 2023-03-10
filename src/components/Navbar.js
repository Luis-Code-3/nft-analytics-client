import logo from "../images/SnipeLogo.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
function Navbar() {

    const getToken = () => {
        return localStorage.getItem("authToken")
      }

    const { logout } = useContext(AuthContext)



    return (
      <nav className="navbarContainer">
        <img src={logo} alt="logo"/>
        <div className="searchBar"></div>
        <Link to={'/'} className='regLinks'>Home</Link>
        <Link to={'/collection-analytics'} className='regLinks'>Collections</Link>
        <Link to={'/top-sales'} className='regLinks'>Sales</Link>
        {/* <Link to={'/blog'} className='regLinks'>Forum</Link> */}

        {
                getToken() ? 
                <>

                    <button className='specLinks logout' onClick={logout}>Logout</button>
                </>

                : 

                <>
                <Link to={'/signup'} className='specLinks'>Signup</Link>
                <Link to={'/login'} className='specLinks'>Login</Link>
                </>
            }
      </nav>
    );
  }
  export default Navbar;