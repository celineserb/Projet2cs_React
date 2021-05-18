import React ,{ useEffect, useState,useRef } from 'react'
import permis from '../../../images/doc1.png'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import {useForm} from 'react-hook-form'
import axios from 'axios'
const fields = ['username','accountState','idTenant']
function ValidationForm ()  {

  const [posts,setPosts] = useState(1);

  
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  // const { id } = useParams()
  // console.log("here is id")
  let id=window.location.pathname
   const array=id.split("/")
   id=array[3]
  console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:8101/get-tenant/${id}`)
    .then(res=>{
    // console.log(res);
      setPosts(res.data)
    })
    .catch(err=>{
      console.log(err)
    }
      )

    
  } )
   const imgpermis="../../.."+posts.permitPicture
  //  const permis= require(imgpermis)
  let imagePath = imgpermis;

  const{register,handleSubmit}=useForm();

  const onSubmit = data => console.log(data);
  
  return (
    <>
      
           
    
    
      <CRow>
          <CCol xs="30" md="6">
            <CCard>
              <CCardHeader>
               Informations d'inscription du locataire
              </CCardHeader>
              <CCardBody>
                <CForm action="./index.js" method="post" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="form-horizontal">
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
                      <p className="form-control-static">10/05/2021</p>
                    </CCol>
                  </CFormGroup>
               
                  <CFormGroup row>
                    <CCol md="3">
                    <p className="form-control-static"></p>
                      <CLabel htmlFor="select">Permis de Conduite </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <img src={permis} height={100} width={160} />
                    
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">Carte identité</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <img src={permis} height={100} width={160} />
                    
                    </CCol>
                  </CFormGroup>
                
                
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input">Message</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                 
                      <CTextarea 
                      // {...rest}
                        name="message" 
                        id="message" 
                        rows="9"
                        placeholder="Message à afficher pour le locataire..." 
                  
                        ref={register}
                      />
                    </CCol>
                  </CFormGroup>
                
  
            
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Valider le compte</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio custom id="inline-radio1" name="inline-radios" value="validated" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Oui</CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio custom id="inline-radio2" name="inline-radios" value="refused" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Non</CLabel>
                      </CFormGroup>
                     
                    </CCol>
                  </CFormGroup>
                 
                 
               
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit"  size="sm"    color="primary"><CIcon name="cil-scrubber" /> Confirmer</CButton>
              
              </CCardFooter>
            </CCard>
            
          </CCol>
         
        </CRow> 
  
    </>
  )

}

export default ValidationForm
