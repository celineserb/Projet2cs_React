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
  CLink,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { login } from '../../../../modules/Auth/auth.crud'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { actions } from "../../../../modules";
import Logo from "../../../../assets/images/logo_yellow.png"
import Logo2 from "../../../../assets/images/logo_gris.png"
import User from '../../../../assets/images/user.png'
import Lock from '../../../../assets/icons/lock.png'
import "../../../../assets/scss/login.css"

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false)

  
  const token = useSelector(({ auth }) => auth.authToken)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (token) {
      setRedirect(true)
    }
  }, [token])

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
          console.log(response.status);
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage: "Signin successful. Redirecting to home page..",
            }));
            dispatch(actions.login(response.data))

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
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-stretch">
      <CContainer className="mr-md-5">
        <CCol className="d-flex flex-column fixed-top pl-5">
          <CLink className="small" to="/">
            <CRow className="d-flex pt-md-5 align-items-center">
              <CIcon src={Logo2} height={40} />
              <p className="m-0 ml-3">AutoLib Dz</p>
            </CRow>
          </CLink>
          <div className="big">
            <div>
              <h3>Louer une voiture</h3><br />
              <h1>Librement et rapidement</h1>
            </div>
            <div>
              <p>Nous vous offrons les meilleurs services<br />Inscriver vous, c'est gratuit!</p>
            </div>
          </div>
          <div className="small">
            <CButton color="primary">Savoir plus</CButton>
          </div>

        </CCol>
        <CRow className="h-100 justify-content-end align-items-end">
          <CCol sm="5" className="mb-5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="d-flex h-100 flex-column justify-content-between">
                    <CRow className="justify-content-center">
                      <CIcon className="align-self-center" src={Logo} height={100} />
                    </CRow>
                      <h1>Se connecter a votre compte</h1>
                    <CInputGroup className="mb-3 p-2">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon src={User} height={25} />
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
                    <CInputGroup className="mb-4 p-2">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon src={Lock} height={25} />
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
                      <CCol>
                        <CButton
                          color="primary"
                          className="login px-5"
                          active
                          tabIndex={-1}
                          onClick={handleSubmitClick}
                        >
                          Se connecter
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
