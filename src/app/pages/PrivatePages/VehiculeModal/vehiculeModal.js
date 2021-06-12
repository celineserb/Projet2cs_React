import React, { useEffect, useState } from "react";

import {
  CButton,
  CCol,
  CFormGroup,
  CTextarea,
  CLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CSpinner,
} from "@coreui/react";

import { getVehicule } from "../../../../modules/Vehicules/vehicules.curd";

function VehiculeModal({ visible, setVisible, vehicule }) {
  //const [user, setUser] = useState({});
  const [entries, setEntries] = useState({});
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    //let vehicule = getVehicule(vehicule.idVehicle);
    /*Promise.all([user, tenant])
        .then(([user, tenant]) => {
          let payload = { ...user.data, ...tenant.data };
          console.log(payload);
          setUser(payload);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });*/
  }, [vehicule]);

  const handleInputChange = (e) => {
    setEntries({ ...entries, [e.target.name]: e.target.value });
  };
  // const handleValidate = (e) => {
  //   if (!loading) {
  //     let d = new Date();
  //     updateTenantStatus(user.idUser, {
  //       ...user,
  //       ...entries,
  //       accountState: "validated",
  //       validationDate:
  //         d.toISOString().split("T")[0] + " " + d.toTimeString().split(" ")[0],
  //     })
  //       .then((e) => setVisible(false))
  //       .catch((e) => {
  //         alert(e.message);
  //       });
  //   }
  // };

  // const handleRefused = () => {
  //   if (!loading) {
  //     updateTenantStatus(user.idUser, {
  //       ...user,
  //       ...entries,
  //       accountState: "refused",
  //     })
  //       .then((e) => setVisible(false))
  //       .catch((e) => {
  //         alert(e.message);
  //       });
  //   }
  // };
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
