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
import { getLocataires, getUsers } from "../../../../modules/Users/users.crud";
import ValidationForm from "../validationCompte";
import axios from "axios";

const fields = ["idUser", "accountState"];

function getBadge(status) {
  switch(status?.toLowerCase()) {
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
      console.log(res.data);
      setLocataires(res.data);
    })
  }, [modalVisible]);

  function HandleClick(locataire) {
    if (locataire.accountState?.toLowerCase() !== "validated") {
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
              <CDataTable
                items={locataires}
                fields={fields}
                hover
                striped
                bordered
                size="md"
                itemsPerPage={10}
                pagination
                clickableRows
                onRowClick={(locataire) => HandleClick(locataire)}
                scopedSlots = {{
                  'accountState':
                    (item)=>(
                      <td>
                        <CBadge  style={{
                          width:75,
                          paddingRight: 10,
                          paddingLeft:10,
                          paddingTop:5,
                          paddingBottom:5,
                          color:"white"
                        }}
                        color={getBadge(item.accountState)}>
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

export default UsersTable;
