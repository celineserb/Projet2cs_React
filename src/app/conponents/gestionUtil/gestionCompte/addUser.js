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
import {  updateAdmin,deleteUser } from '../../../../modules/Users/users.crud';
import { getUserById , deleteAuth} from '../../../../modules/Auth/auth.crud';
function AddForm ({visible, setVisible,admin})  {
  
  const [user, setUser] = useState(1)
  
  // const [entries, setEntries] = useState({})
  const [loading, setLoading] = useState(true)
  // let initialInputState=NULL

  useEffect(()=> {
    
    if (admin) {
      getUserById(admin)
      .then(res=>{
        setUser(res.data)
        setLoading(false)
      })
      .catch(err=>{
        console.log(err)
      }
        )
 
    }else{console.log("no user",admin)}
    
  }) 
  

  let initialInputState={lastName:user.lastName,firstName:user.firstName,phoneNumber:user.phoneNumber}
  const [eachEntry, setEachEntry]=useState(initialInputState);
   let {lastName,firstName,phoneNumber}=eachEntry;
  const handleInputChange= e=>{
    
    setEachEntry({...eachEntry,[e.target.name]:e.target.value});
    // console.log(eachEntry)
  };

  const handleValidate= e=>{
    const address=user.address
    const userName=user.userName
    const nom=lastName;
    const prenom=firstName;
    const numeroTelephone=phoneNumber
 
    const  data={nom,prenom,numeroTelephone,address,userName}
    if (!loading ) {
  
    //  console.log("dataaaa",data) 
      updateAdmin(admin,data)
      .then(e => setVisible(false))
      .catch(e => {
        alert(e.message)
      })
    }else{console.log("error")}
  };

  const handleRefused = () => {
    if (!loading) {
      deleteUser(admin)
      deleteAuth(admin)
      // updateTenantStatus(admin.idTenant, {...admin, ...entries, accountState: "refused"})
      .then(e => setVisible(false))
      .catch(e => {
        alert(e.message)
      })
    }
  }

 
 
  return (
    <>
      <CModal size="md" centered show={visible} onClose={() => setVisible(false)}>
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
                    <CLabel>{user.lastName}</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="lastName" name="lastName" onChange={handleInputChange}  required value={lastName} />
                    {/* <p className="form-control-static">{user.lastName}</p> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>{user.firstName}</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="firstName" name="firstName" onChange={handleInputChange} required value={firstName} />
                    {/* <p className="form-control-static">{user.firstName}</p> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>{user.phoneNumber}</CLabel>
                  </CCol>
                  <CCol xs="5" md="9">
                  <CInput id="phoneNumber"  name="phoneNumber" onChange={handleInputChange} required value={phoneNumber}  />
                    
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
