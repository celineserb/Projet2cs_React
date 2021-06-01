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
<<<<<<< HEAD
import CIcon from '@coreui/icons-react'
import axios from 'axios'

function ValidationForm ()  {
=======
import { getTenantById, updateTenantStatus } from '../../../../modules/Users/users.crud';
import { getUserById } from '../../../../modules/Auth/auth.crud';
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e

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
    
<<<<<<< HEAD
  } )
 
     const imgpermis ="../../../../assets/images/"+posts.permitPicture
  const imgprofil ="../../../../assets/images/"+posts.profilePicture
 const initialInputState={stateMessage:"",accountState:""};
   const [eachEntry, setEachEntry]=useState(initialInputState);
   const {stateMessage,accountState}=eachEntry;
   const handleInputChange= e=>{
     setEachEntry({...eachEntry,[e.target.name]:e.target.value});

   };
   const HandleFinalSubmit= e=>{
   const  data={accountState,stateMessage}   
   console.log(data)
    axios.put('http://localhost:8101/update-tenant/1', data)
  .then(response => {
    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
  }).catch(error => {
    console.error('Something went wrong!', error);
  });
=======
  }, [locataire])
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e

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
<<<<<<< HEAD
                      <CLabel htmlFor="select">Permis de Conduite </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <img src={imgpermis} height={140} width={210} ></img>
                    
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">Carte identité</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <img src= { imgprofil } height={140} width={210} />
                    
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
                        value={stateMessage}
                        onChange={handleInputChange}
                      />
                    </CCol>
                  </CFormGroup>
                
  
            
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Valider le compte</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio custom id="inline-radio1" name="inline-radios" name="accountState" value="Validated" 
                        onChange={handleInputChange} />
                        <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Oui</CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio custom id="inline-radio2" name="inline-radios"  name="accountState" value="Refused"
                        onChange={handleInputChange} />
                        <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Non</CLabel>
                      </CFormGroup>
                     
                    </CCol>
                  </CFormGroup>
                 
                 
               
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit"  size="sm" onClick={HandleFinalSubmit}   color="primary"><CIcon name="cil-scrubber" /> Confirmer</CButton>
              
              </CCardFooter>
            </CCard>
            
          </CCol>
         
        </CRow> 
  
=======
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
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
    </>
  )

}

export default ValidationForm
