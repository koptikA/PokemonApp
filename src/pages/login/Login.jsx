import React from "react"
import { Modal, Spinner } from "react-bootstrap";
import {  Navigate } from "react-router-dom";
import { Button } from "../../components/UI/Button";
import { initialValues } from "../login/initialValues"

import { loginSelector } from "./selectors";
import { ROUTE_NAMES } from "../../routes/routeNames";
import { loginThunk } from "../login/thunks";
import { Field, Formik } from "formik";
import { validationSchema } from "./validation";
import { FormikField } from "../../components/FormikField/FormikField";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch()
  const { isAuth, errors, isLoading } = useSelector(loginSelector);

  const handleSubmit = (values) => {
      
      loginThunk(dispatch, values);
  };
  if (isAuth) return <Navigate to={ROUTE_NAMES.HOME}/>;
  return (
    <div className="login">
      <Formik 
        initialValues={initialValues} 
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formikProps) => {
          return (
            <Modal show={true} >
              <Modal.Header >
                <Modal.Title>Войдите в систему</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Field 
                  component={FormikField} 
                  type="email" 
                  placeholder="email" 
                  name="email"
                  label="Email"
                />

                <Field 
                  component={FormikField} 
                  type="password" 
                  placeholder="password" 
                  name="password"
                  label="Password" 
                />

                <div className="form-error-message">{errors}</div>          

              </Modal.Body>
                <Modal.Footer>
                  <Button
                    disabled={isLoading || !formikProps.isValid}
                    variant="success" 
                    onClick={formikProps.handleSubmit}
                    >
                    {isLoading ? <Spinner animation="border" /> : "Войти"}
                  </Button>
                </Modal.Footer>
            </Modal>
          )}
        }  
      </Formik>
              
    </div>
  );
};

export default Login;

