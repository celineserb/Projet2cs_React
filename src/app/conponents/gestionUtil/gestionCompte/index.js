import React, { useEffect, useState } from "react";
import {
  CDataTable,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";
import { getUsers } from "../../../../modules/Users/users.crud";
import AddForm from "./addUser";
import CreateAccount from "./createAccount";

const fields = ["userName", "lastName", "firstName", "address", "userType"];


function UsersTable() {
  const [users, setUsers] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState({})
  

  useEffect(() => {
    getUsers()
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [modalVisible, modalIsOpen]);
 
   function HandleClick(admin) {
      console.log("selected user: ", admin.idUser)
      setSelectedAdmin(admin)
      setModalVisible(true)
 
   
  }
  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
}
const setModalIsOpenToFalse =()=>{
  setModalIsOpen(false)
}
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Liste des Utilisateurs {' '}
              <CButton
                color="warning"
                size="sm"
                shape="rounded-pill"
                position="relative"
                active
                tabIndex={-1}
                onClick={setModalIsOpenToTrue}>
                  Ajouter un Compte
              </CButton>        
            </CCardHeader>
                    
            <CCardBody>
              <CDataTable
               items={users}
               fields={fields}
                hover
                striped
                bordered
                size="md"
                itemsPerPage={10}
                pagination
                clickableRows
                 onRowClick={(admin) => HandleClick(admin)}
           
              />
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>

      <AddForm visible={modalVisible} setVisible={setModalVisible} user={selectedAdmin} />
      <CreateAccount visible={modalIsOpen} setVisible={setModalIsOpenToFalse}/>
                       
    </>
  );
}

export default UsersTable;
