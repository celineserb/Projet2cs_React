import React, { useEffect, useState } from "react";
import {
  CDataTable,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import { getLocataires } from "../../../../modules/Users/users.crud";
import ValidationForm from "../validationCompte";

const fields = ["idUser", "accountState"];

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
    .catch((err) => {
      console.log(err);
    });
  }, []);

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
