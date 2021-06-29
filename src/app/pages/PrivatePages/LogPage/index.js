import React, { useEffect, useState } from 'react'

import { getAllLogs } from '../../../../modules/Log/log.crud'
import '../../../../assets/scss/log.scss'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const LogPage = () => {
  const [logs,getLogs] = useState([])

  useEffect(() => {
    getLogRecords();
  },[])

  const getLogRecords = () =>{ 
    getAllLogs()
    .then((response) =>{
        const res = response.data;
        getLogs(res)
    }).catch(error => console.error('Erreur GET'))
  }

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <h1 className="title">Logs</h1>
            <CCardBody>
              <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center"></CTableHeaderCell>
                    <CTableHeaderCell>Details de log</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Service/Application</CTableHeaderCell>
                    <CTableHeaderCell>Date de log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {logs?.map((item, index) => (
                    <CTableRow key={item.id}>
                    <CTableDataCell className="text-center">
                      <div className={item.idErreur!=null ? "success-log" : "error-log"}></div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.details}</div>
                      <div className="small text-medium-emphasis">
                        {item.idErreur!=null ? item.idErreur.message : ""}
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">{item.idApp.nomApp}</CTableDataCell>
                    <CTableDataCell>
                      <strong>{new Date(item.date).toLocaleDateString()}</strong>
                      <div className="small text-medium-emphasis">{new Date(item.date).toLocaleTimeString()}</div>
                    </CTableDataCell>
                  </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default LogPage