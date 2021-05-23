import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";

import { login } from "../../../../modules/Auth/auth.crud";

const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const redirectToHome = () => {
    console.log("Before push: ", props.history);
    props.history.push("/dashboard");
    console.log("After push: ", props.history);
  };

  const sendDetailsToServer = () => {
    localStorage.removeItem("token");

    if (state.email && state.password) {
      const payload = {
        email: state.email,
        password: state.password,
      };
      login(state.email, state.password)
        .then(function (response) {
          console.log(response.status);
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage: "Signin successful. Redirecting to home page..",
            }));
            console.log(payload);
            localStorage.setItem("token", response.data.token);
            redirectToHome();
          } else {
            alert("Please enter valid email and password");
          }
        })
        .catch(function (error) {
          alert("Please enter valid email and password");
        });
    } else {
      alert("Please enter valid email and password");
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    sendDetailsToServer();
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          color="link"
                          className="px-0"
                          active
                          tabIndex={-1}
                          onClick={handleSubmitClick}
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
