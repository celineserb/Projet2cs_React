import React, { useEffect, useState } from 'react'

import { getStyle, hexToRgba } from '@coreui/utils'
import StyledChart from '../../../conponents/charts/StyledChart'
import { CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CRow } from '@coreui/react'
import { getBornes, getVehicles } from '../../../../modules/Vehicle/vehicle.crud'
import { getBorneUsagePerDay, getBorneUsagePerMonth, getBorneUsagePerYear, getVehicleUsagePerDay, getVehicleUsagePerMonth, getVehicleUsagePerYear } from '../../../../modules/Stats/stats.crud'

import "../../../../assets/scss/graphLocation.scss"

// const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
// const brandDanger = getStyle('danger') || '#f86c6b'


export default function GrapheLocation ()  {

  const [vehicles, setVehicles] = useState([])
  const [activeVehicules, setActiveVehicules] = useState({})
  const [vehiculeDatasets, setVehiculeDatasets] = useState({
    labels: [],
    datasets: []
  })
  const [vehiculePeriod, setVehiculePeriod] = useState("Jour")

  const [bornes, setBornes] = useState([])
  const [activeBornes, setActiveBornes] = useState({})
  const [borneDatasets, setBorneDatasets] = useState({
    labels: [],
    datasets: []
  })
  const [bornePeriod, setBornePeriod] = useState("Jour")

  useEffect(() => {
    getVehicles()
    .then(({data}) => {
      setVehicles(data)
    })
    .catch(e => {
      console.log(e)
    })

    getBornes()
    .then(({data}) => {
      setBornes(data)
    })
  }, [])

  useEffect(() => {
    async function getVehiculeData() {
      // reset
      setVehiculeDatasets(state => ({...state, datasets: []}))

      const date = new Date()
      const [dayOfMonth, day, month, year] = [date.getDay(), date.getDate(), date.getMonth(), date.getFullYear()]
      
      let period = []
      let datasets = []
      let isSet = false
      for (let j in activeVehicules) {
        if (!activeVehicules[j])
          continue;
        
        let dataset = []
        if (vehiculePeriod === "Jour") {
          const periods = ["Dim", "Lun", "Mar", "Mer", "Je", "Ven", "Sa"]
          const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          let dom = dayOfMonth
          for (let k = 0; k < 31; k++) {
            let mois = month + 1, days;
            if (day - k < 0) {
              mois = month
              days = day - k + months[month - 1]
            } else {
              days = day - k
            }
            const { data } = await getVehicleUsagePerDay(j, year, mois, days)
            dataset.push(parseInt(data.TotalRents))
            const per = dom % periods.length
            if (!isSet) 
              period.unshift(periods[per < 0? per + periods.length: per])
            
            dom--
          }
        } else if (vehiculePeriod === "Mois") {
          const periods = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]
          for (let k = 0; k < 12; k++) {
            let mois = month - k
            let annee = year
            if (mois < 0) {
              break;
            }
            const { data } = await getVehicleUsagePerMonth(j, annee, mois + 1)
            dataset.push(parseInt(data.TotalRents))
            const per = mois % periods.length
            if (!isSet) 
              period.unshift(periods[per < 0? per + periods.length: per])
          }
        } else if (vehiculePeriod === "Année") {
          let annee = year
          while (annee > 2017) {
            const { data } = await getVehicleUsagePerYear(j, annee)
            dataset.push(parseInt(data.TotalRents))
            if (!isSet)
              period.unshift(annee.toString())
            annee--
          }
        }
        datasets.push({
          label: 'Vehicule ' + j,
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: dataset
        })
        isSet = true
      }
      setVehiculeDatasets({labels: period, datasets})
    }
    getVehiculeData()
  }, [activeVehicules, vehiculePeriod])

  useEffect(() => {
    async function getBorneData() {
      // reset
      setBorneDatasets(state => ({...state, datasets: []}))

      const date = new Date()
      const [dayOfMonth, day, month, year] = [date.getDay(), date.getDate(), date.getMonth(), date.getFullYear()]
      
      let period = []
      let datasets = []
      let isSet = false
      for (let j in activeBornes) {
        if (!activeBornes[j])
          continue;
        
        let dataset = []
        if (bornePeriod === "Jour") {
          const periods = ["Dim", "Lun", "Mar", "Mer", "Je", "Ven", "Sa"]
          const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          let dom = dayOfMonth
          for (let k = 0; k < 31; k++) {
            let mois = month + 1, days;
            if (day - k < 0) {
              mois = month
              days = day - k + months[month - 1]
            } else {
              days = day - k
            }
            const { data } = await getBorneUsagePerDay(j, year, mois, days)
            dataset.push(parseInt(data.TotalRents))
            const per = dom % periods.length
            if (!isSet) 
              period.unshift(periods[per < 0? per + periods.length: per])
            
            dom--
          }
        } else if (bornePeriod === "Mois") {
          const periods = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]
          for (let k = 0; k < 12; k++) {
            let mois = month - k
            let annee = year
            if (mois < 0) {
              break;
            }
            const { data } = await getBorneUsagePerMonth(j, annee, mois + 1)
            dataset.push(parseInt(data.TotalRents))
            const per = mois % periods.length
            if (!isSet) 
              period.unshift(periods[per < 0? per + periods.length: per])
          }
        } else if (bornePeriod === "Année") {
          let annee = year
          while (annee > 2017) {
            const { data } = await getBorneUsagePerYear(j, annee)
            dataset.push(parseInt(data.TotalRents))
            if (!isSet)
              period.unshift(annee.toString())
            annee--
          }
        }
        datasets.push({
          label: 'Borne ' + j,
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: dataset
        })
        isSet = true
      }
      setBorneDatasets({labels: period, datasets})
    }

    getBorneData()
  }, [activeBornes, bornePeriod])

  function selectVehicule(i) {
    setActiveVehicules({...activeVehicules, [i]: !activeVehicules[i]})
  }

  function selectBorne(i) {
    setActiveBornes({...activeBornes, [i]: !activeBornes[i]})
  }

  return (
    <>
      <CRow>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>
              Liste des bornes
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                {bornes.map((e, i) => (
                  <CListGroupItem key={i} action active={activeBornes[e.idBorne]} onClick={() => selectBorne(e.idBorne)}>{`${e.idBorne}: ${e.city}`}</CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>

        </CCol>
      </CRow>
      <StyledChart dataset={borneDatasets} period={bornePeriod} setPeriod={setBornePeriod} />

      <CRow>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>
              Liste des vehicules
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                {vehicles.map((e, i) => (
                  <CListGroupItem key={i} action active={activeVehicules[e.idVehicle]} onClick={() => selectVehicule(e.idVehicle)}>{`${e.vehiclebrand}: ${e.vehiclemodel}`}</CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>

        </CCol>
      </CRow>
      <StyledChart dataset={vehiculeDatasets} period={vehiculePeriod} setPeriod={setVehiculePeriod} />
    </>
  )

}