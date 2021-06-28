import React from "react";

import {
  CCol,
  CFormGroup,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";

function VehiculeModal({ visible, setVisible, vehicule }) {
  return (
    <>
      <CModal
        size="xl"
        centered
        show={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader closeButton>
          <CModalTitle>Informations du Véhicule</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CCol>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Identifiant borne</CLabel>
                <p className="form-control-static">{vehicule.idBorne}</p>
              </CCol>
              <CCol md="3">
                <CLabel>Identifiant véhicule</CLabel>
                <p className="form-control-static">{vehicule.idVehicle}</p>
              </CCol>
              <CCol md="3">
                <CLabel>Prix unitaire par heure</CLabel>
                <p className="form-control-static">
                  {vehicule.unitPricePerHour} DA
                </p>
              </CCol>
              <CCol md="3">
                <CLabel>Prix unitaire par jour</CLabel>
                <p className="form-control-static">
                  {vehicule.unitPricePerDay} DA
                </p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Type du véhicule</CLabel>
                <p className="form-control-static">{vehicule.vehicleType}</p>
              </CCol>
              <CCol md="3">
                <CLabel>Marque du véhicule</CLabel>
                <p className="form-control-static">{vehicule.vehiclebrand}</p>
              </CCol>
              <CCol md="3">
                <CLabel>Modèle du véhicule</CLabel>
                <p className="form-control-static">{vehicule.vehiclemodel}</p>
              </CCol>
              <CCol md="3">
                <CLabel>Type du véhicule</CLabel>
                <p className="form-control-static">{vehicule.vehicleType}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Type du carburant</CLabel>
                <p className="form-control-static">{vehicule.fuelType}</p>
              </CCol>
              <CCol md="3">
                <CLabel>Matricule</CLabel>
                <p className="form-control-static">
                  {vehicule.registrationNumber}
                </p>
              </CCol>
              <CCol md="3">
                <CLabel>Couleur</CLabel>
                <p className="form-control-static">{vehicule.vehicleColor}</p>
              </CCol>
            </CFormGroup>
          </CCol>
        </CModalBody>

        <CModalFooter></CModalFooter>
      </CModal>
    </>
  );
}

export default VehiculeModal;
