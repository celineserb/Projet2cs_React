<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {

   CDataTable,

  CCard,
  CCardBody,

  CCardHeader,
  CCol,
 

  CRow,

} from '@coreui/react'


const TheLayout = React.lazy(() => import('../../../containers/TheLayout'));
const fields = ['username','accountState']

function HandleClick(id){
   console.log(id);
    window.location.href= "/gestionUtil/validationCompte/"+id
 
 }
   

  function UsersTable(){
    const [posts,setPosts] = useState([]);
    const [id,setId]=useState(1);
    const [idFromButtonClick,setIdFromButtonClick]=useState(1);
    const rowEvents= {
      onclick:(e,row)=>{

        console.log(row)
      },
    };
      

    useEffect(()=>{
      axios.get('http://localhost:8101/get-tenant')
      .then(res=>{
       // console.log(res);
        setPosts(res.data)
      })
      .catch(err=>{
        console.log(err)
      }
        )
  
      
    } )
    let idTenant=0
    return (
      <>
       
         <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
               Liste des Locataires inscrits
              </CCardHeader>
              <CCardBody>
=======
import React, { useEffect, useState } from "react";
import {
  CDataTable,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CBadge,
} from "@coreui/react";
import { getLocataires } from "../../../../modules/Users/users.crud";
import ValidationForm from "../validationCompte";

const fields = ["idUser", "accountState"];

function getBadge(status) {
  switch(status) {
    case "validated": return "success"
    case "refused": return "danger"
    case "pending": return "info"
    default: return "warning"
  }
}

function UsersTable() {
  const [locataires, setLocataires] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedLocataire, setSelectedLocataire] = useState({})

  useEffect(() => {
    getLocataires()
    .then((res) => {
      setLocataires(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [modalVisible]);

  function HandleClick(locataire) {
    if (locataire.accountState !== "validated") {
      setSelectedLocataire(locataire)
      setModalVisible(true)
    }
  }

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Liste des Locataires inscrits</CCardHeader>
            <CCardBody>
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
              <CDataTable
                items={locataires}
                fields={fields}
                hover
                striped
                bordered
<<<<<<< HEAD
              
                size="sm"
                itemsPerPage={10}
                pagination
                clickEvent={post=>idTenant=post.idTenant}
                rowEvents={rowEvents}
                clickableRows
                 onRowClick={post=>  HandleClick(post.idTenant) }
         
              />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
       
      </>
    )
  }

 
=======
                size="md"
                itemsPerPage={10}
                pagination
                clickableRows
                onRowClick={(locataire) => HandleClick(locataire)}
                scopedSlots = {{
                  'accountState':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.accountState)}>
                          {item.accountState}
                        </CBadge>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <ValidationForm visible={modalVisible} setVisible={setModalVisible} locataire={selectedLocataire} />
    </>
  );
}
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e

export default UsersTable
