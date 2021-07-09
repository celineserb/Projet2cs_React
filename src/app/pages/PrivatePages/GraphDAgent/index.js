import React, { useEffect, useState } from 'react'

import { getStyle, hexToRgba } from '@coreui/utils'
import StyledChart from '../../../conponents/charts/StyledChart'
import { CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CRow } from '@coreui/react'
import { getAgents } from '../../../../modules/Agent/agent.crud'
import { getUserById } from '../../../../modules/Auth/auth.crud'
import {  getAgentUsagePerDay, getAgentUsagePerMonth, getAgentUsagePerYear } from '../../../../modules/Stats/stats.crud'

import "../../../../assets/scss/graphLocation.scss"

// const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
// const brandDanger = getStyle('danger') || '#f86c6b'


export default function GrapheLocation ()  {

  const [agents, setAgents] = useState([])
  const [activeAgents, setActiveAgents] = useState({})
  const [agentDatasets, setAgentDatasets] = useState({
    labels: [],
    datasets: []
  })
  const [agentPeriod, setAgentPeriod] = useState("Jour")

  useEffect(() => {
    getAgents()
    .then(async ({data}) => {
      let agent = [];
      for (let i in data) {
        let test = await getUserById(data[i].idUser)
        console.log(test.data)
        agent.push(test.data)

      }

      setAgents(agent)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  useEffect(() => {
    async function getAgentData() {
      // reset
      setAgentDatasets(state => ({...state, datasets: []}))
      
      let period = []
      let datasets = []
      let isSet = false
      for (let j in activeAgents) {
        if (!activeAgents[j])
          continue;
        
        let dataset = []
        if (agentPeriod === "Jour") {
          const periods = ["Dim", "Lun", "Mar", "Mer", "Je", "Ven", "Sa"]
          const { data } = await getAgentUsagePerDay(j)
          console.log(data)
          let days = data.slice(-31)
          for (let i of days) {
            const date = new Date(i.day.split('T')[0])
            dataset.push(parseInt(i.reparations))
            if (!isSet)
              period.push(periods[date.getDay()])
          }
        } else if (agentPeriod === "Mois") {
          const { data } = await getAgentUsagePerMonth(j)

          for (let i of data) {
            dataset.push(parseInt(i.reparations))
            if (!isSet)
              period.push(i.month)
          }
        } else if (agentPeriod === "Année") {
          const { data } = await getAgentUsagePerYear(j)
          for (let i of data) {
            dataset.push(parseInt(i.reparations))
            if (!isSet)
              period.push(i.year)
          }
        }
        datasets.push({
          label: 'Agent ' + j,
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: dataset
        })
        isSet = true
      }
      setAgentDatasets({labels: period, datasets})
    }
    getAgentData()
  }, [activeAgents, agentPeriod])

  
  function selectAgent(i) {
    setActiveAgents({...activeAgents, [i]: !activeAgents[i]})
    console.log("id agent selectionné",i)
  }

 
  return (
    <>
      

      <CRow>
        <CCol sm="12" xl="6">
          <CCard>
            <CCardHeader>
              Liste des agents
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                {agents.map((e, i) => (
                  <CListGroupItem key={i} action active={activeAgents[e.idUser]} onClick={() => selectAgent(e.idUser)}>{`${e.lastName} ${e.firstName}`}</CListGroupItem>
                ))}
              </CListGroup>
            </CCardBody>
          </CCard>

        </CCol>
      </CRow>
       <StyledChart dataset={agentDatasets} period={agentPeriod} setPeriod={setAgentPeriod} /> 
    </>
  )

}