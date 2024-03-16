import React, { useContext, useState } from "react"
import { Form, Modal, Spinner } from "react-bootstrap";
import {  Navigate } from "react-router-dom";

import { MyContext } from "../../customRedux/CustomRedux";
import { Button } from "../../components/UI/Button";

import { loginSelector } from "./selectors";
import { ROUTE_NAMES } from "../../routes/routeNames";
import AuthService from "../../services/AuthService";
import { loginFail, loginLoading, loginSuccess } from "./actions/index";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store, dispatch } = useContext(MyContext);
  const { isAuth, errors, isLoading } = loginSelector(store);

  const handleSubmit = () => {
    dispatch(loginLoading())
    AuthService.login({
      email: email,
      password: password,
    })
    
      .then((response) => {
        dispatch(loginSuccess(response))
       
      })
      .catch(({response}) => {
        dispatch(loginFail(response?.data?.message))
      });
  };

  if (isAuth) return <Navigate to={ROUTE_NAMES.HOME}/>;

  return (
      <div className="login">
        <Modal show={true} >
            <Modal.Header >
              <Modal.Title>Войдите в систему</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group 
                className="mb-3" 
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  
                />
              </Form.Group>

              <div className="form-error-message">{errors}</div>          

            </Modal.Body>
            <Modal.Footer>
              <Button
                disabled={isLoading}
                variant="success" 
                onClick={handleSubmit}
                >
                {isLoading ? <Spinner animation="border" /> : "Войти"}
              </Button>
            </Modal.Footer>
        </Modal>
      </div>
  );
};

export default Login;

