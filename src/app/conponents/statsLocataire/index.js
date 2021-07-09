import React, { useEffect, useState } from "react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CCardHeader,
  CDataTable,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { getVehicules } from "../../../modules/Vehicules/vehicules.curd";

import MainChartExample from "../charts/MainChartExample";
import ChartBarSimple from "../charts/ChartBarSimple";
import Charts from "../charts/Charts";
import VehiculeModal from "./vehiculeModal";

// {
//   "unitPricePerHour": 1.21,
//   "unitPricePerDay": 51.2,
//   "vehicleType": "voiture",
//   "vehiclebrand": "reneau",
//   "vehiclemodel": "308",
//   "fuelType": "super",
//   "registrationNumber": "42 120 454215",
//   "vehicleColor": "red",
//   "idBorne": 2,
//   "longitude": 1.25,
//   "latitude": 1.022
// }

const fields = [
  "idBorne",
  "vehicleType",
  "vehiclebrand",
  "vehiclemodel",
  "Disponibilité",
];

function StatsTables() {
  const [vehicules, setVehicules] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVehicule, setSelectedVehicule] = useState({});

  useEffect(() => {
    getVehicules()
      .then((res) => {
        console.log(res.data);
        setVehicules(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function HandleClick(vehicule) {
    setSelectedVehicule(vehicule);
    setModalVisible(true);
  }

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Liste des véhicules</CCardHeader>
            <CCardBody>
              <CDataTable
                items={vehicules}
                fields={fields}
                hover
                striped
                bordered
                size="md"
                itemsPerPage={10}
                pagination
                clickableRows
                onRowClick={(vehicule) => HandleClick(vehicule)}
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
    </>
  );
}

export default StatsTables;
