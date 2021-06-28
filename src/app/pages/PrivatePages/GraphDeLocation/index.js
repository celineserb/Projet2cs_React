import React, { useEffect, useState } from "react";

import { getStyle, hexToRgba } from "@coreui/utils";
import StyledChart from "../../../conponents/charts/StyledChart";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
} from "@coreui/react";
import {
  getBornes,
  getVehicles,
} from "../../../../modules/Vehicle/vehicle.crud";
import {
  getBorneUsagePerDay,
  getBorneUsagePerMonth,
  getBorneUsagePerYear,
  getVehicleUsagePerDay,
  getVehicleUsagePerMonth,
  getVehicleUsagePerYear,
} from "../../../../modules/Stats/stats.crud";

import "../../../../assets/scss/graphLocation.scss";

// const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle("info") || "#20a8d8";
// const brandDanger = getStyle('danger') || '#f86c6b';

export default function GrapheLocation() {
  const [vehicles, setVehicles] = useState([]);
  const [activeVehicules, setActiveVehicules] = useState({});
  const [vehiculeDatasets, setVehiculeDatasets] = useState({
    labels: [],
    datasets: [],
  });
  const [vehiculePeriod, setVehiculePeriod] = useState("Jour");

  const [bornes, setBornes] = useState([]);
  const [activeBornes, setActiveBornes] = useState({});
  const [borneDatasets, setBorneDatasets] = useState({
    labels: [],
    datasets: [],
  });
  const [bornePeriod, setBornePeriod] = useState("Jour");

  useEffect(() => {
    getVehicles()
      .then(({ data }) => {
        setVehicles(data);
      })
      .catch((e) => {
        console.log(e);
      });

    getBornes().then(({ data }) => {
      setBornes(data);
    });
  }, []);

  useEffect(() => {
    async function getVehiculeData() {
      // reset
      setVehiculeDatasets((state) => ({ ...state, datasets: [] }));

      let period = [];
      let datasets = [];
      let isSet = false;
      for (let j in activeVehicules) {
        if (!activeVehicules[j]) continue;

        let dataset = [];
        if (vehiculePeriod === "Jour") {
          const periods = ["Dim", "Lun", "Mar", "Mer", "Je", "Ven", "Sa"];
          const { data } = await getVehicleUsagePerDay(j);
         
          let days = data.slice(-31);
          for (let i of days) {
            const date = new Date(i.day.split("T")[0]);
            dataset.push(parseInt(i.rents));
            if (!isSet) period.push(periods[date.getDay()]);
          }
        } else if (vehiculePeriod === "Mois") {
          const { data } = await getVehicleUsagePerMonth(j);

          for (let i of data) {
            dataset.push(parseInt(i.rents));
            if (!isSet) period.push(i.month);
          }
        } else if (vehiculePeriod === "Année") {
          const { data } = await getVehicleUsagePerYear(j);
          for (let i of data) {
            dataset.push(parseInt(i.rents));
            if (!isSet) period.push(i.year);
          }
        }
        datasets.push({
          label: "Vehicule " + j,
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: dataset,
        });
        isSet = true;
      }
      setVehiculeDatasets({ labels: period, datasets });
    }
    getVehiculeData();
  }, [activeVehicules, vehiculePeriod]);

  useEffect(() => {
    async function getBorneData() {
      // reset
      setBorneDatasets((state) => ({ ...state, datasets: [] }));

      let period = [];
      let datasets = [];
      let isSet = false;
      for (let j in activeBornes) {
        if (!activeBornes[j]) continue;

        let dataset = [];
        if (bornePeriod === "Jour") {
          const periods = ["Dim", "Lun", "Mar", "Mer", "Je", "Ven", "Sa"];
          const { data } = await getBorneUsagePerDay(j);
          console.log(data)
          let days = data.slice(-31);
          for (let i of days) {
            const date = new Date(i.day.split("T")[0]);
            dataset.push(parseInt(i.rents));
            if (!isSet) period.push(periods[date.getDay()]);
          }
        } else if (bornePeriod === "Mois") {
          const { data } = await getBorneUsagePerMonth(j);

          for (let i of data) {
            dataset.push(parseInt(i.rents));
            if (!isSet) period.push(i.month);
          }
        } else if (bornePeriod === "Année") {
          const { data } = await getBorneUsagePerYear(j);

          for (let i of data) {
            dataset.push(parseInt(i.rents));
            if (!isSet) period.push(i.year);
          }
        }
        datasets.push({
          label: "Borne " + j,
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: dataset,
        });
        isSet = true;
      }
      setBorneDatasets({ labels: period, datasets });
    }

    getBorneData();
  }, [activeBornes, bornePeriod]);

  function selectVehicule(i) {
    setActiveVehicules({ ...activeVehicules, [i]: !activeVehicules[i] });
  }

  function selectBorne(i) {
    setActiveBornes({ ...activeBornes, [i]: !activeBornes[i] });
  }

  return (
    <>
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
                    active={activeBornes[e.idBorne]}
                    onClick={() => selectBorne(e.idBorne)}
                  >{`${e.idBorne}: ${e.city}`}</CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <StyledChart
        dataset={borneDatasets}
        period={bornePeriod}
        setPeriod={setBornePeriod}
      />

      <CRow>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>Liste des vehicules</CCardHeader>
            <CCardBody>
              <CListGroup>
                {vehicles.map((e, i) => (
                  <CListGroupItem
                    key={i}
                    action
                    active={activeVehicules[e.idVehicle]}
                    onClick={() => selectVehicule(e.idVehicle)}
                  >{`${e.vehiclebrand}: ${e.vehiclemodel}`}</CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <StyledChart
        dataset={vehiculeDatasets}
        period={vehiculePeriod}
        setPeriod={setVehiculePeriod}
      />
    </>
  );
}
