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
              <CDataTable
                items={posts}
                fields={fields}
                hover
                striped
                bordered
              
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

 

export default UsersTable
