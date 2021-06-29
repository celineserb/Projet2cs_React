import React ,{ useEffect, useState } from 'react'

import {
  CButton,
  CCol,
  CFormGroup,
  CTextarea,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CSpinner,
  CSelect,CInput,

} from '@coreui/react'

import {  postUser} from '../../../../modules/Users/users.crud';
import { postAccount} from '../../../../modules/Auth/auth.crud';



function CreateAccount ({visible, setVisible})  {
   
   
    let initialInputState={userName:"",email:"", phoneNumber:"",lastName:"",password:"",type:"",firstName:"",address:""}
    const [eachEntry, setEachEntry]=useState(initialInputState);
     let {userName,email,phoneNumber,password,lastName,address,type,firstName}=eachEntry;
    const handleInputChange= e=>{
      
      setEachEntry({...eachEntry,[e.target.name]:e.target.value});
   

    };
    const handleValidate= e=>{
        console.log("here")
         const nom=lastName
         const prenom = firstName
        console.log("nom",nom)
         console.log("tyyyyyype",type)
         type="decision_maker"
         const numeroTelephone=phoneNumber
        const  data={userName,numeroTelephone,type,nom,prenom,address}
        console.log("data:",data)
        const idUser=17
        
        const authData={email,idUser,password}
        console.log("auth data ",authData)
      
        //  console.log("dataaaa",data) 
          postUser(data)
         
          .then(e =>  console.log("id user"))
          .catch(e => {
            alert(e.message)
          })
          postAccount(authData)
          .then(e => 
            setVisible(false)
            // console.log("success")
          )
          .catch(e => {
              console.log("Erreur signup")
            alert(e.message)
          })
        
      };
  
         return (
            <>
            <CModal show={visible}>
            <CModalHeader closeButton>
          <CModalTitle>Creer Compte</CModalTitle>
        </CModalHeader>
            <CCol>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Nom Utilisateur</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="userName" name="userName"   onChange={handleInputChange}  required value={userName}  />
                   
                  </CCol>
                </CFormGroup>
            
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Nom </CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="lastName" name="lastName"   onChange={handleInputChange}  required value={lastName}  />
                   
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Prénom </CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="firstName" name="firstName"   onChange={handleInputChange}  required value={firstName}  />
                   
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Addresse </CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="address" name="address"   onChange={handleInputChange}  required value={address}  />
                   
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Téléphone</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="phoneNumber" name="phoneNumber"   onChange={handleInputChange}  required value={phoneNumber}  />
                   
                  </CCol>
              
                  <CFormGroup>
                  <CCol md="3">
                    <CLabel >Type utilisateur</CLabel> </CCol>
                    <CCol xs="5" md="9">
                    <CSelect  name="type" onChange={handleInputChange} required value={type}>
                      <option    value="decision_maker">Décideur</option>
                      <option   value="technical_admin">Administrateur technique</option>

                      <option    value="account_admin">Administrateur Compte</option>
                    </CSelect></CCol>
                  </CFormGroup>
         
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Email</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="email" name="email"  onChange={handleInputChange}  required value={email} />
                    {/* <p className="form-control-static">{user.firstName}</p> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Mot de passe</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="password"  name="password"  onChange={handleInputChange}  required value={password}  />
                    
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
