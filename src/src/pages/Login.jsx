import React, {useState} from "react";
import {Form, Button, Alert} from "react-bootstrap";
import "./login.scss";

import BackgroundImage from "../assets/images/background.png";
import Logo from "../assets/images/logo.png";
import Frame from "../components/layout/Frame";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername === "admin" || inputPassword === "admin") {
      window.localStorage.setItem("username", inputUsername);
      window.localStorage.setItem("auth", "2");
      window.location.href = "/main";
    } else if (inputUsername === "user" || inputPassword === "user") {
      window.localStorage.setItem("username", inputUsername);
      window.localStorage.setItem("auth", "1");
      window.location.href = "/main";
    } else {
      setShow(true);
    }
    setLoading(false);
  };

  const handlePassword = () => {
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
      <Frame
          propIsActiveSidebar={false}
      >
        <div
            className="sign-in__wrapper"
            style={{backgroundImage: `url(${BackgroundImage})`}}
        >
          {/* Overlay */}
          <div className="sign-in__backdrop"></div>
          {/* Form */}
          <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
            {/* Header */}
            <img
                className="img-thumbnail mx-auto d-block mb-3"
                src={Logo}
                alt="logo"
            />
            <div className="h4 mb-3 text-center">Sign In</div>
            {/* ALert */}
            {show ? (
                <Alert
                    className="mb-3"
                    variant="danger"
                    onClose={() => setShow(false)}
                    dismissible
                >
                  Incorrect username or password.
                </Alert>
            ) : (
                <div/>
            )}
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                  type="text"
                  value={inputUsername}
                  placeholder="Username"
                  onChange={(e) => setInputUsername(e.target.value)}
                  required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                  type="password"
                  value={inputPassword}
                  placeholder="Password"
                  onChange={(e) => setInputPassword(e.target.value)}
                  required
              />
            </Form.Group>
            {/*<Form.Group className="mb-2" controlId="checkbox">
              <Form.Check type="checkbox" label="Remember me"/>
            </Form.Group>*/}
            {!loading ? (
                <Button className="w-100 mt-4" variant="primary" type="submit">
                  Log In
                </Button>
            ) : (
                <Button className="w-100 mt-4" variant="primary" type="submit" disabled>
                  Logging In...
                </Button>
            )}
            {/*<div className="d-grid justify-content-end">
              <Button
                  className="text-muted px-0"
                  variant="link"
                  onClick={handlePassword}
              >
                Forgot password?
              </Button>
            </div>*/}
          </Form>
          {/* Footer */}
          <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">

          </div>
        </div>
      </Frame>
  );
};

export default Login;
