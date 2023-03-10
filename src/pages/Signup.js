import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { post } from "../services/authService";

function Signup() {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const {authenticateUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewUser((recent) => ({...recent, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/users/signup',newUser)
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

                <input type='text' name="username" value={newUser.username} placeholder='Username' onChange={handleChange}></input>

                <input type='email' name="email" value={newUser.email} placeholder='Email' onChange={handleChange}></input>

                <input type='password' name="password" value={newUser.password} placeholder='Password' onChange={handleChange}></input>

                <button type="submit">Create Account</button>

            </form>
      </div>
    );
  }
  
  export default Signup;