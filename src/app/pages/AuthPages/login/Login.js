import React, { useEffect, useState } from "react";
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

import { login } from "../../../../modules/Auth/auth.crud";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { actions } from "../../../../modules";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const token = useSelector(({ auth }) => auth.authToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      setRedirect(true);
    }
  }, [token]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = () => {
    if (state.email && state.password) {
      login(state.email, state.password)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage: "Signin successful. Redirecting to home page..",
            }));
            dispatch(actions.login(response.data));
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

  if (redirect) {
    return <Redirect to="/" />;
  }

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
