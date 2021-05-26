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

const fields = ["username", "accountState"];

function HandleClick(id) {
  console.log(id);
  window.location.href = "/gestionUtil/validationCompte/" + id;
}

function UsersTable() {
  const [posts, setPosts] = useState([]);
  const rowEvents = {
    onclick: (e, row) => {
      console.log(row);
    },
  };

  useEffect(() => {
    getLocataires().then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Liste des Locataires inscrits</CCardHeader>
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
