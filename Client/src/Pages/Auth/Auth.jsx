import { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Aboutauth from "./Aboutauth.jsx";
import { signup, login } from "../../action/auth.js";

function Auth() {
    const [issignup, setissignup] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault(); // Fix: Use 'preventDefault' instead of 'PreventDefault'
        if (!email && !password) {
            alert("Enter email and password");           
        }
        if (issignup) {
            if (!name) {
                alert("Enter your name to continue");
            }
            dispatch(signup({ name, email, password }, navigate));
            console.log(name, password, email);
        } else {
            dispatch(login({ email, password }, navigate));
            console.log(email, password);
        }
    };

    const handleswitch = () => {
        setissignup(!issignup);
        setname("");
        setemail("");
        setpassword("");
    };

    return (
        <section className="auth-section">
            {issignup && <Aboutauth />}
            <div className="auth-container-2">
                <img src="/Stack_Overflow_icon.png" alt="Logo" width={50} />
                <form id="sign up" onSubmit={handlesubmit}>
                    {issignup && ( // Render this block only when 'issignup' is true
                        <label htmlFor="name">
                            <h4>Display name</h4>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => {
                                    setname(e.target.value);
                                }}
                            />
                        </label>
                    )}
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                        />
                    </label>
                    <label htmlFor="password">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4>Password</h4>
                            {!issignup && (
                                <p style={{ color: "#007ac6", fontSize: "13px" }}>Forgot password?</p>
                            )}
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                        />
                    </label>
                    <button type="submit" className="auth-btn">
                        {issignup ? "Signup" : "Login"}
                    </button>
                </form>
                <p>{issignup ? "Already have an account?" : "Don't have an account?"}</p>
                <button type="button" onClick={handleswitch} className="handle-switch-btn">
                    {issignup ? "Log in" : "Sign up"}
                </button>
            </div>
        </section>
    );
}

export default Auth;
