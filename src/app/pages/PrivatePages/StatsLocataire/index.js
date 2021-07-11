import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardHeader,
  CDataTable,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";

import { getVehicules } from "../../../../modules/Vehicules/vehicules.curd";

import { getBornes } from "../../../../modules/Vehicle/vehicle.crud";

import { getVehiculesById } from "../../../../modules/Vehicle/vehicle.crud";

import VehiculeModal from "../VehiculeModal/vehiculeModal";


import "./vehicules.css";

const fields = [
  "idBorne",
  "vehicleType",
  "vehiclebrand",
  "vehiclemodel",
  "availibility",
];

function StatsTables() {
  const [vehicules, setVehicules] = useState([]);
  const [vehiculesBorne, setVehiculesByBorne] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVehicule, setSelectedVehicule] = useState([]);
  const [borne, setBorne] = useState(0);
  const [bornes, setBornes] = useState([]);

  useEffect(() => {
    getVehicules()
      .then((res) => {
        setVehicules(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getBornes().then(({ data }) => {
      setBornes(data);
    });
  }, []);

  function handleClick(vehicule) {
    setSelectedVehicule(vehicule);
    setModalVisible(true);
  }

  const handleChange = async (e) => {
    if (borne !== e.idBorne) {
      await setBorne(e.idBorne);
      getVehiculesById(e.idBorne).then((res) => {
        setVehiculesByBorne(res.data);
      });
    }
  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Liste des véhicules</CCardHeader>
            <CCardBody>
              <CDataTable
                items={vehiculesBorne}
                fields={fields}
                hover
                striped
                bordered
                size="md"
                itemsPerPage={10}
                pagination
                clickableRows
                onRowClick={(vehicule) => handleClick(vehicule)}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <VehiculeModal
        visible={modalVisible}
        setVisible={setModalVisible}
        vehicule={selectedVehicule}
      />
      <CRow>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>Liste des bornes</CCardHeader>
            <CCardBody>
              <CListGroup>
                {bornes.map((e, i) => (
                  <CListGroupItem
                    key={i}
                    action
                    onClick={() => handleChange(e)}
                  >{`${e.idBorne}: ${e.city}`}</CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  );
}

export default StatsTables;
