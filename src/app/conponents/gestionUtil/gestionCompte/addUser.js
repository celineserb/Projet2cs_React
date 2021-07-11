import React ,{ useEffect, useState } from 'react'

import {
  CButton,
  CCol,
  CFormGroup,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CSpinner,
  CInput
} from '@coreui/react'
import {  updateAdmin,deleteUser, deleteTenant, deleteAgent, deleteAccountAdmin, deleteTechnicalAdmin, deleteDecisionMaker } from '../../../../modules/Users/users.crud';
import { deleteAuth } from '../../../../modules/Auth/auth.crud';

const types = ["tenant","agent", "decision_maker","agent_admin","account_admin", "technical_admin"]

function AddForm ({visible, setVisible, user})  {

  const [eachEntry, setEachEntry] = useState(user)
  // const [entries, setEntries] = useState({})
  const [loading, setLoading] = useState(true)
  // let initialInputState=NULL


  // console.log(eachEntry)
  

  const handleInputChange= e=>{
    setEachEntry({...eachEntry,[e.target.name]:e.target.value});
  };

  useEffect(() => {
    if (visible) {
      setLoading(false)
      setEachEntry(user)
    }
  }, [visible, user])

  const handleValidate= e=>{
    const nom = eachEntry.lastName;
    const prenom = eachEntry.firstName;
    const numeroTelephone = eachEntry.phoneNumber
 
    const  data={nom,prenom,numeroTelephone,address: eachEntry.address, userName: eachEntry.userName, userType: eachEntry.userType}
    if (!loading ) {
      updateAdmin(eachEntry.idUser, data)
      .then(e => setVisible(false))
      .catch(e => {
        console.log(e)
      })
    }else{console.log("error")}
  };

  const handleRefused = () => {
    if (!loading) {

      let promise

      switch (eachEntry.userType) {
        case "tenant":
          promise = deleteTenant(eachEntry.idUser)
          break
        case "agent":
          promise = deleteAgent(eachEntry.idUser)
          break
        case "decision_maker":
          promise = deleteDecisionMaker(eachEntry.idUser)
          break
        case "account_admin":
          promise = deleteAccountAdmin(eachEntry.idUser)
          break
        case "technical_admin":
          promise = deleteTechnicalAdmin(eachEntry.idUser)
          break
        default:
          promise = new Promise((res) => {
            res()
          })
      }

      promise
      .then(() => {
          deleteUser(eachEntry.idUser)
          .then(e => setVisible(false))
          .catch(console.log)
      })
      .catch(console.log)
    }
  }

 
 
  return (
    <>
      <CModal size="lg" centered show={visible} onClose={() => setVisible(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Details</CModalTitle>
        </CModalHeader>

        <CModalBody>
          {
            loading?
              <CSpinner />:
              <CCol>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>nom</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="lastName" name="lastName" onChange={handleInputChange}  required value={eachEntry.lastName} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>prenom</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="firstName" name="firstName" onChange={handleInputChange} required value={eachEntry.firstName} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>username</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                    <CInput id="userName" name="userName" onChange={handleInputChange} required value={eachEntry.userName} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>numero telephone</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                    <CInput id="phoneNumber"  name="phoneNumber" onChange={handleInputChange} required value={eachEntry.phoneNumber}  />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>adresse</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                    <CInput id="address"  name="address" onChange={handleInputChange} required value={eachEntry.address}  />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>user type</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                    <select id="userType" name="userType" onChange={handleInputChange} required value={eachEntry.userType}>
                      {types.map((e, i) => (<option key={i} value={e}>{e.split('_').join(' ')}</option>))}
                    </select>
                  </CCol>
                </CFormGroup>
              </CCol>
          }
          
        </CModalBody>

        <CModalFooter>
          <CButton color="success" onClick={handleValidate}>
            Modifier
          </CButton>
          <CButton color="danger" onClick={handleRefused}>Supprimer</CButton>
        </CModalFooter>
      </CModal>
    </>
  )

}

export default AddForm
