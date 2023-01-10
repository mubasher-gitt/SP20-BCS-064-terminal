import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
        const submitHandler = (e) => {
            const sendReq = async () => {
              const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  username: name,
                  password: password,
                }),
              });
            };



    };
    

    return (
        <div>
        <form className="credentials" action="" method="post" onSubmit={submitHandler} ></form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter name"/>
            <br/><br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password"/>
            <br/><br/>
            <button   type="button">Login</button>
        </div>
    );
};
export default Login;


