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
import permis from "../../../images/doc1.png";
import axios from "axios";
import useAxios from "axios-hooks";
import Home from "src/routes";
import {
  Redirect,
  Route,
  Link,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import { useRoutes } from "hookrouter";
import { browserHistory } from "react-router";
import {
  CBadge,
  CDataTable,
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
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

import usersData from "../../users/UsersData";
import { render } from "enzyme/build";
import Login from "src/views/pages/login/Login";
// import routes from 'src/routes';

const TheLayout = React.lazy(() => import("../../../containers/TheLayout"));

const fields = ["username", "accountState"];
// function Red(){

// }

function HandleClick(id) {
  console.log(id);
  window.location.href = "/gestionUtil/validationCompte/" + id;
}

function UsersTable() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const rowEvents = {
    onclick: (e, row) => {
      console.log(row);
    },
  };

  // } handleClick(){

  // }
  useEffect(() => {
    axios
      .get("http://localhost:8101/get-tenant")
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  let idTenant = 0;
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Liste des Locataires inscrits</CCardHeader>
            <CCardBody>
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
              <CDataTable
                items={posts}
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

 

export default UsersTable
=======
                size="sm"
                itemsPerPage={10}
                pagination
                clickEvent={(post) => (idTenant = post.idTenant)}
                rowEvents={rowEvents}
                clickableRows
                onRowClick={(post) => HandleClick(post.idTenant)}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default UsersTable;
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
