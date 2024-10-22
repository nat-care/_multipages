import Form from "react-bootstrap/Form";
import { useRef } from "react";

import { checkUsername } from "../../data/username";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container">
        <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form.Label htmlFor="uesrname">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        aria-describedby="passwordHelpBlock"
        placeholder="Username"
        style={{ textAlign: "center" }}
        ref={userRef}
      />

      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        aria-describedby="passwordHelpBlock"
        placeholder="password"
        style={{ textAlign: "center" }}
        ref={passRef}
      />

      <button
        className="btn btn-success mt-3"
        onClick={() => {
          const user = userRef.current.value.trim();
          const pass = passRef.current.value.trim();
          userRef.current.value = "";
          passRef.current.value = "";
          const userInfo = checkUsername(user, pass);
          if (userInfo === null) {
            alert("Wrong Username or Password");
            userRef.current.setFocus();
          } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
