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

} from '@coreui/react'
import { getTenantById, updateTenantStatus } from '../../../../modules/Users/users.crud';
import { getUserById } from '../../../../modules/Auth/auth.crud';

function ValidationForm ({visible, setVisible, locataire})  {

  const [user, setUser] = useState({})
  const [entries, setEntries] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    if (locataire.idUser) {
      let user = getUserById(locataire.idUser)
      let tenant = getTenantById(locataire.idUser)
      
      Promise.all([user, tenant]).then(([user, tenant]) => {
        let payload = {...user.data, ...tenant.data}
    
        setUser(payload)
        setLoading(false)
      }).catch(err => {
        console.log(err)
      })
    }
    
  }, [locataire])

  const handleInputChange= e=>{
    setEntries({...entries,[e.target.name]:e.target.value});
  };
  const handleValidate= e=>{
    if (!loading) {
      let d = new Date()
      updateTenantStatus(locataire.idTenant, {...locataire, ...entries, accountState: "validated", validationDate: d.toISOString().split('T')[0]+' '+d.toTimeString().split(' ')[0]})
      .then(e => setVisible(false))
      .catch(e => {
        alert(e.message)
      })
    }
    
  };

  const handleRefused = () => {
    if (!loading) {
      updateTenantStatus(locataire.idTenant, {...locataire, ...entries, accountState: "refused"})
      .then(e => setVisible(false))
      .catch(e => {
        alert(e.message)
      })
    }
  }
  return (
    <>
      <CModal size="lg" centered show={visible} onClose={() => setVisible(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Validation du Compte</CModalTitle>
        </CModalHeader>

        <CModalBody>
          {
            loading?
              <CSpinner />:
              <CCol>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel><h5 style={{fontWeight:"bold"}}>Nom:</h5></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <h5 className="form-control-static">{user.lastName}</h5>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel><h5 style={{fontWeight:"bold"}}>Prénom:</h5></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <h5 className="form-control-static">{user.firstName}</h5>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel><h5 style={{fontWeight:"bold"}} >Tel: </h5></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                        <h5 className="form-control-static">0{user.phoneNumber}</h5>
                  </CCol>
                </CFormGroup>
                      
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel><h5 style={{fontWeight:"bold"}} >Inscrit le:</h5></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <h5 className="form-control-static">{user.creationDate.toString()}</h5>
                  </CCol>
                </CFormGroup>
                  
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel> <h5 style={{fontWeight:"bold"}}>Permis de Conduite:</h5> </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <img src= {user.imgpermis} height={100} width={100} alt="permis" />         
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel><h5 style={{fontWeight:"bold"}}>Identité:</h5></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <img src={user.imgprofil} height={100} width={100} alt="profil" />                   
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input"><h5 style={{fontWeight:"bold"}} >Message:</h5></CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                      
                    <CTextarea 
                      name="stateMessage" 
                      rows="3"
                      placeholder="Message à afficher pour le locataire..." 
                      value={entries.stateMessage}
                      onChange={handleInputChange}
                    />
                  </CCol>
                </CFormGroup>
              </CCol>
          }
          
        </CModalBody>

        <CModalFooter>
          <CButton color="success" onClick={handleValidate}>
            Valider
          </CButton>
          <CButton color="danger" onClick={handleRefused}>Refuser</CButton>
        </CModalFooter>
      </CModal>
    </>
  )

}

export default ValidationForm
