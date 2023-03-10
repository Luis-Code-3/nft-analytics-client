import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { post } from "../services/authService";

function Login() {

    const [thisUser, setThisUser] = useState({
        username: '',
        password: ''
    })

    const {authenticateUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setThisUser((recent) => ({...recent, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/users/login`,thisUser)
            .then((results) => {
                console.log(results.data);
                navigate(`/`);
                localStorage.setItem('authToken', results.data.token)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                authenticateUser();
            })
    }

    return (
      <div className="signupContainer">
        <form className="signupForm" onSubmit={handleSubmit}>

            <input type='text' name="username" value={thisUser.username} placeholder='Username' onChange={handleChange}></input>

            <input type='password' name="password" value={thisUser.password} placeholder='Password' onChange={handleChange}></input>

            <button type="submit">Login</button>

        </form>
      </div>
    );
  }
  
  export default Login;