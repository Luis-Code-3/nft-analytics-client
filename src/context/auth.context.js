import { useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../services/authService"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const navigate = useNavigate();

    const authenticateUser = () => {
        const token = localStorage.getItem("authToken");
        
     
        if (token) {
            get("/users/verify")
                .then((results) => {
                    console.log("Are we logged in?", results.data);
                })
                .catch((err) => {
                    localStorage.clear();
                    console.log(err.message);
                })
                .finally(() => {
                });
            } else {
                localStorage.clear()
            }
    }

    const logout = () => {
        localStorage.clear();
        navigate("/");
      };


    useEffect(() => {
        authenticateUser();
      }, []);


    return (
        <AuthContext.Provider value={{ authenticateUser, logout }}>
          {children}
        </AuthContext.Provider>
      );
}

export { AuthContext, AuthProvider }