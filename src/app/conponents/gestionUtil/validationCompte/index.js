import React ,{ useEffect, useState,useRef } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInputRadio,
  CLabel,
 
  CRow,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
<<<<<<< HEAD

=======
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
function ValidationForm ()  {

  const [posts,setPosts] = useState(1);

  
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  let id=window.location.pathname
   const array=id.split("/")
   id=array[3]
 

  useEffect(()=>{
    axios.get(`http://localhost:8101/get-tenant/${id}`)
    .then(res=>{
      setPosts(res.data)
    })
    .catch(err=>{
      console.log(err)
    }
      )

    
  } )
<<<<<<< HEAD
 
  
   const imgpermis ="../../../../assets/images/"+posts.permitPicture
  const imgprofil ="../../../../assets/images/"+posts.profilePicture
// const imgprofil = "../../../../assets/images/doc1.png"
// const imgpermis from "../../../../assets/images/doc1.png"
  console.log("image profil",imgprofil)



// adding dynamic paths
// let imgpermis = "../../../../assets/images"+posts.permitPicture
console.log("image permi",imgpermis)
=======
   const imgpermis="../../../images/"+posts.permitPicture
  const imgprofil ="../../../images/"+posts.profilePicture
  console.log("image profil",imgprofil)
  console.log("image permi",imgpermis)
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
  
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

  };
  return (
    <>
      
           
    
    
      <CRow>
          <CCol xs="30" md="6">
            <CCard>
              <CCardHeader>
               Informations d'inscription du locataire
              </CCardHeader>
              <CCardBody>
                <CForm action="./index.js" method="post"  encType="multipart/form-data" className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Nom et prénom</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <p className="form-control-static">{
                      posts.username}</p>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Numéro de téléphone</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <p className="form-control-static">{
                      posts.phonenumber}</p>
                    </CCol>
                  </CFormGroup>
                
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Date d'inscription</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <p className="form-control-static">{posts.dateSignUp}</p>
                    </CCol>
                  </CFormGroup>
               
                  <CFormGroup row>
                    <CCol md="3">
                    <p className="form-control-static"></p>
                      <CLabel htmlFor="select">Permis de Conduite </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
<<<<<<< HEAD
                    <img src={imgpermis} height={140} width={210} ></img>
=======
                    <img src= {imgpermis} height={140} width={210} />
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
                    
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
  
    </>
  )

}

export default ValidationForm
