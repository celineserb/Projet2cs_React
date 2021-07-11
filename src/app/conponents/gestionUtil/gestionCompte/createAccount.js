import React, { useState } from 'react'

import {
  CButton,
  CCol,
  CFormGroup,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CInput

} from '@coreui/react'

import {  postUser} from '../../../../modules/Users/users.crud';
import { postAccount} from '../../../../modules/Auth/auth.crud';

const types = ["tenant","agent", "decision_maker","agent_admin","account_admin", "technical_admin"]

function CreateAccount ({visible, setVisible})  {
   
    const [eachEntry, setEachEntry]=useState({});
    const {lastName, firstName, phoneNumber, userType, userName, address, email, password } = eachEntry

    const handleInputChange= e=>{
      setEachEntry({...eachEntry,[e.target.name]:e.target.value});
    };

    const handleValidate= e=>{
      const nom=lastName
      const prenom = firstName
      const numeroTelephone=phoneNumber
      const data={userName, numeroTelephone, userType, nom, prenom, address}
        
      postUser(eachEntry)
      .then(res => { 
        const authData={email,idUser: res.data.idUser,password}
       
        //Create account:
        postAccount(authData)
        .then(e => 
          setVisible(false)
          // console.log("success")
        )
        .catch(e => {
          console.log("Erreur signup")
          alert(e.message)
        })
        
      }).catch(err => {
        console.log(err)
      }) 
    }
  
  return (
    <>
      <CModal show={visible} onClose={() => setVisible()}>
        <CModalHeader closeButton>
          <CModalTitle>Creer Compte</CModalTitle>
        </CModalHeader>
        <CCol className="pl-4">
          <CFormGroup row className="mt-2">
            <CCol md="3">
              <CLabel>Nom Utilisateur</CLabel>
            </CCol>
            <CCol xs="5" md="9">
              <CInput id="userName" name="userName" onChange={handleInputChange}  required value={eachEntry.userName}  />
            </CCol>
          </CFormGroup>
      
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Nom </CLabel>
            </CCol>
            <CCol xs="5" md="9">
              <CInput id="lastName" name="lastName"   onChange={handleInputChange}  required value={eachEntry.lastName}  />            
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Prénom </CLabel>
            </CCol>
            <CCol xs="5" md="9">
              <CInput id="firstName" name="firstName"   onChange={handleInputChange}  required value={eachEntry.firstName}  />            
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Addresse </CLabel>
            </CCol>
            <CCol xs="5" md="9">
              <CInput id="address" name="address"   onChange={handleInputChange}  required value={eachEntry.address}  />            
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Téléphone</CLabel>
            </CCol>
            <CCol xs="5" md="9">
              <CInput id="phoneNumber" name="phoneNumber"   onChange={handleInputChange}  required value={eachEntry.phoneNumber}  />
            </CCol>
          </CFormGroup>
          <CFormGroup row className="mb-2">
            <CCol md="3">
              <CLabel>user Type</CLabel>
            </CCol>
            <CCol xs="5" md="9">
              <select name="userType" onChange={handleInputChange} value={eachEntry.userType}>
                {
                  types.map((e, i) => (
                    <option key={i} value={e}>{e.split("_").join(" ")}</option>
                  ))
                }
              </select>
            </CCol>
          </CFormGroup>
    
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Email</CLabel>
            </CCol>
            <CCol xs="5" md="9">
              <CInput id="email" name="email" onChange={handleInputChange} required value={eachEntry.email} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Mot de passe</CLabel>
            </CCol>
            <CCol xs="5" md="9">
            <CInput id="password" name="password" onChange={handleInputChange}  required value={eachEntry.password}  />
              
            </CCol>
          </CFormGroup>   
        </CCol>  

          <CModalFooter>
    <CButton color="warning" onClick={handleValidate}>
      Confirmer
    </CButton>
    
  </CModalFooter> 
            </CModal>
      </>
  )
 

}

export default CreateAccount
