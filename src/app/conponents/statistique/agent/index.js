


import React, { useEffect, useState } from 'react'
import axios from 'axios'
 import agentsData from '../../users/AgentsData'
 import usersData from '../../users/UsersData'
 import {
 
  CChartPie
} from '@coreui/react-chartjs'
   
import {

    CDataTable,
 
   CCard,
   CCardBody,
 
   CCardHeader,
   CCol,
  
 
   CRow,
 
 } from '@coreui/react'
 
  function AgentStat(){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:8000/Agent')
      .then(res=>{
        setPosts(res.data)
     
        //get non users :
      })
      .catch(err=>{
        console.log(err)
      }
        )
  
      
    } )
    const fields = ['idAgent','Reparation']
    const Agentsfields = ['panne','date de signalement','statut','Description','Date réparation','Agent']
    return (
      
        <>      
           <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                 Tableau de bord des Agents 
                </CCardHeader>
                <CCardBody>
                <CDataTable
                  items={posts}
                  labels={['Agents', 'Nombre de pannes']}
                  fields={fields}
                  hover
                  striped
                  bordered           
                  size="sm"
                  itemsPerPage={10}
                  pagination  
                />
                </CCardBody>
              </CCard>
      
            </CCol>
            <CCol>            
      <CCard>
        <CCardHeader>
          Pannes
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  
                  
                  '#F9C31B',
                  '#29CC97'
                ],
                data: [40, 60]
              }
            ]}
            labels={['Réparées', 'Non Réparées']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
      </CCol>
          </CRow>
          <CRow>
          <CCol>
              <CCard>
                <CCardHeader>
                 Tableau de bord des Agents 
                </CCardHeader>
                <CCardBody>
                <CDataTable
                  items={agentsData}
                  fields={Agentsfields}
                  hover
                  striped
                  bordered
                
                  size="dm"
                  itemsPerPage={10}
                  pagination
                
           
                />
                </CCardBody>
            
              </CCard>  </CCol>
          </CRow>
         
        </>
      )
       
    
  }

 

// export default AgentStat
