import React, { useEffect, useState } from "react";
import {
  CDataTable,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CBadge,
  CButton,
  CSelect,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CSpinner,CFormGroup,
} from "@coreui/react";
import { getDecideurs } from "../../../../modules/Users/users.crud";
import { getTechniqueAdmins } from "../../../../modules/Users/users.crud";
import AddForm from "./addUser";
import CreateAccount from "./createAccount";
import Modal from 'react-modal';

const fields = ["idUser","type","dateCreation"];


function UsersTable() {
  const [decideurs, setDecideurs] = useState([]);
  const [techAdmins, setTechAdmins] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState({})
  

  useEffect(() => {
    getDecideurs()
    .then((res) => {
      res.data.map(i=>i.type="Decideur")
      
      setDecideurs(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  });
  useEffect(() => {
    getTechniqueAdmins()
    .then((res) => {
      res.data.map(i=>i.type="Administrateur technique")
      
      setTechAdmins(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  });
 

   const data=decideurs.concat(techAdmins);
   function HandleClick(admin) {
      console.log("selected user: ", admin.idUser)
      setSelectedAdmin(admin.idUser)
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
            <CCardHeader>Liste des Administrateurs & Décideurs
            {/* <div class="position-relative">
            <div class="position-absolute top-0 end-0"> */}
            <CButton
                          color="warning"
                          size="sm"
                          shape="rounded-pill"
                          position="relative"
                          active
                          tabIndex={-1}
                          onClick={setModalIsOpenToTrue}
                          
           
                        //  onClick={HandleClickCreate()} 
                         // onClick={handleSubmitClick}
                      //    onClick={HandleClick()}
                        >
                          Ajouter un Compte
                        </CButton>
                       
            </CCardHeader>
            
                       
                    
            <CCardBody>
              <CDataTable
               items={data}
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
    
      {/* <CreateAccount visible={model} setVisible={setModal}  /> */}
      <AddForm visible={modalVisible} setVisible={setModalVisible} admin={selectedAdmin} />
                       {/* <Modal isOpen={modalIsOpen}>
                        <button onClick={setModalIsOpenToFalse}>x</button> */}
                        <CreateAccount visible={modalIsOpen} setVisible={setModalIsOpen}/>
                       
    </>
  );
}

export default UsersTable;
