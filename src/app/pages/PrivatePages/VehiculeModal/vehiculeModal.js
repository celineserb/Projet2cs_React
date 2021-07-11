import React from "react";

import {
  CCol,
  CFormGroup,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody
} from "@coreui/react";

function VehiculeModal({ visible, setVisible, vehicule }) {
  return (
    <>
      <CModal
        centered
        show={visible}
        onClose={() => setVisible(false)}
        size="md"
      >
        <CModalHeader closeButton>
          <CModalTitle>Informations du Véhicule</CModalTitle>
        </CModalHeader>
        <CModalBody>
            <CFormGroup row>
              <CCol md="4">
                <CLabel>Identifiant borne:</CLabel>
                </CCol>
              <cCol>
                <p>{vehicule.idBorne}</p>
              </cCol>  
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4">
                <CLabel>Identifiant véhicule:</CLabel>
                </CCol>
              <cCol>
              <p className="form-control-static">{vehicule.idVehicle}</p>
              </cCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4">
                <CLabel>Prix unit par heure:</CLabel>
              </CCol>
              <CCol>
                <p className="form-control-static"> {vehicule.unitPricePerHour} DA </p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4">
                <CLabel>Prix unit par jour:</CLabel>
              </CCol>
              <CCol>
                <p className="form-control-static"> {vehicule.unitPricePerDay} DA </p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4">
                <CLabel>Type du véhicule:</CLabel>
              </CCol>
              <CCol>
                <p className="form-control-static">{vehicule.vehicleType}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4">
                <CLabel>Marque du véhicule:</CLabel>
              </CCol>
              <CCol>
                <p className="form-control-static">{vehicule.vehiclebrand}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4">
                <CLabel>Modèle du véhicule:</CLabel>
              </CCol>
              <CCol>
                <p className="form-control-static">{vehicule.vehiclemodel}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4" >
                <CLabel>Type du véhicule:</CLabel>
              </CCol>
              <CCol>
              <p className="form-control-static">{vehicule.vehicleType}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4" >
                <CLabel>Type du carburant:</CLabel>
              </CCol>
              <CCol>
                <p className="form-control-static">{vehicule.fuelType}</p>
              </CCol>
            </CFormGroup>
        </CModalBody>
      </CModal>
    </>
  );
}

export default VehiculeModal;
