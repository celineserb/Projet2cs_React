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
        console.log(payload)
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
      updateTenantStatus(user.idUser, {...locataire, ...entries, accountState: "validated", validationDate: d.toISOString().split('T')[0]+' '+d.toTimeString().split(' ')[0]})
      .then(e => setVisible(false))
      .catch(e => {
        alert(e.message)
      })
    }
  };

  const handleRefused = () => {
    if (!loading) {
      updateTenantStatus(user.idUser, {...locataire, ...entries, accountState: "refused"})
      .then(e => setVisible(false))
      .catch(e => {
        alert(e.message)
      })
    }
  }
  return (
    <>
      <CModal size="xl" centered show={visible} onClose={() => setVisible(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>

        <CModalBody>
          {
            loading?
              <CSpinner />:
              <CCol>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Nom</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{user.lastName}</p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>prénom</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{user.firstName}</p>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Numéro de téléphone</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{user.phoneNumber}</p>
                  </CCol>
                </CFormGroup>
                      
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Date d'inscription</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">{user.creationDate}</p>
                  </CCol>
                </CFormGroup>
                  
                <CFormGroup row>
                  <CCol md="3">
                    <p className="form-control-static"></p>
                    <CLabel htmlFor="select">Permis de Conduite </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <img src= {user.imgpermis} height={140} width={210} alt="permis" />         
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Carte identité</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <img src= { user.imgprofil } height={140} width={210} alt="profile" />                   
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Message</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                      
                    <CTextarea 
                      name="stateMessage" 
                      rows="9"
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
