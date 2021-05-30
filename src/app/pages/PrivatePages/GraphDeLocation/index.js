import React, { useEffect, useState } from 'react'

import { getStyle, hexToRgba } from '@coreui/utils'
import StyledChart from '../../../conponents/charts/StyledChart'
import { CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CRow } from '@coreui/react'
import { getBornes, getVehicles } from '../../../../modules/Vehicle/vehicle.crud'
import { getVehicleUsagePerDay } from '../../../../modules/Stats/stats.crud'

const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
const brandDanger = getStyle('danger') || '#f86c6b'


export default function GrapheLocation ()  {

  const [vehicles, setVehicles] = useState([])
  const [activeVehicules, setActiveVehicules] = useState({})
  const [vehiculeDatasets, setVehiculeDatasets] = useState()
  const [bornes, setBornes] = useState([])
  const [activeBornes, setActiveBornes] = useState({})

  useEffect(() => {
    getVehicles()
    .then(({data}) => {
      setVehicles(data)
      console.log(data)
    })
    .catch(e => {
      console.log(e)
    })

    getBornes()
    .then(({data}) => {
      setBornes(data)
      console.log(data)
    })
  }, [])

  useEffect(() => {
    async function getChartData() {
      const date = new Date()
      let day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      
      let datasets = []
      for (let j in activeVehicules) {
        if (!activeVehicules[j])
        continue;
        
        let dataset = []
        let days = day
        while (days > 0) {
          const { data } = await getVehicleUsagePerDay(j, year, month, days)
          dataset.push(parseInt(data.TotalRents))
          days--
        }
        datasets.push({
          label: 'Vehicule ' + j,
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: dataset
        })
      }
      setVehiculeDatasets(datasets)
    }
    getChartData()
  }, [activeVehicules])

  function selectVehicule(i) {
    setActiveVehicules({...activeVehicules, [i]: !activeVehicules[i]})
  }

    const random = (min, max)=>{
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    const defaultDatasets = (()=>{
        let elements = 27
        const data1 = []
        const data2 = []
        const data3 = []
        for (let i = 0; i <= elements; i++) {
          data1.push(random(50, 200))
          data2.push(random(80, 100))
          data3.push(65)
        }
        return [
          {
            label: 'My First dataset',
            backgroundColor: hexToRgba(brandInfo, 10),
            borderColor: brandInfo,
            pointHoverBackgroundColor: brandInfo,
            borderWidth: 2,
            data: data1
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: brandSuccess,
            borderWidth: 2,
            data: data2
          },
          {
            label: 'My Third dataset',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: brandDanger,
            borderWidth: 1,
            borderDash: [8, 5],
            data: data3
          }
        ]
      })()
    
      const defaultOptions = (()=>{
        return {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: false
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(250 / 5),
                  max: 250
                },
                gridLines: {
                  display: true
                }
              }]
            },
            elements: {
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              }
            }
          }
        }
      )()

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
                  <CListGroupItem key={i} action active={activeBornes[i]} onClick={() => setActiveBornes({...activeBornes, [i]: !activeBornes[i]})}>{`${e.idBorne}: ${e.city}`}</CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>

        </CCol>
      </CRow>
      <StyledChart dataset={defaultDatasets} options={defaultOptions} />

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
      <StyledChart dataset={vehiculeDatasets} options={defaultOptions} />
    </>
  )

}