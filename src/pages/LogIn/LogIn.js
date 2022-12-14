import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Contexts/UserContex";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const { LogInUser, googleLogin, githubLogin } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    LogInUser(email, password)
      .then((result) => {
        setSuccess(true);
        setErr(false);
        form.reset();
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        setErr(true);
        setSuccess(false);
      });
  };
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Form className="border p-5 w-75" onSubmit={handleLogin}>
        <h3 className="d-flex justify-content-center">Please Log In</h3>
        {success ? (
          <p className="d-flex text-success justify-content-center">
            User Log In successfully
          </p>
        ) : (
          <></>
        )}
        {err ? (
          <p className="d-flex justify-content-center text-danger">
            Email and Password doesn's match!!
          </p>
        ) : (
          <></>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div>
          <Form.Text className="text-muted">
            Need an account? <Link to="/register">Register</Link>
          </Form.Text>
        </div>
        <div className="d-flex mt-3 justify-content-center w-100">
          <Button className="w-100 fw-bold" variant="warning" type="submit">
            Log In
          </Button>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p className="fw-bold">OR</p>
        </div>
        <div className="d-flex justify-content-between w-100">
          <Button
            className="w-50 me-3"
            variant="outline-success"
            onClick={googleLogin}
          >
            <FaGoogle />
          </Button>
          <Button
            className="w-50 ms-3"
            variant="outline-dark"
            onClick={githubLogin}
          >
            <FaGithub />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LogIn;
