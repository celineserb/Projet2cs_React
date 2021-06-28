import React, { useEffect, useState } from 'react'

import { getAllLogs } from '../../../../modules/Log/log.crud'
import '../../../../assets/scss/log.scss'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CDataTable,
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

  const fields = [
    { key: 'etat', _style: { width: '20%'} },
    { key: 'details', _style: { width: '40%'} },
    { key: 'application', _style: { width: '20%'} },
    { key: 'date', _style: { width: '20%'} }]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <h1 className="title">Logs</h1>
            <CCardBody>
            <CDataTable
                items={logs}
                fields={fields}
                hover
                striped
                bordered
                size="md"
                itemsPerPage={10}
                pagination
                clickableRows
                scopedSlots = {{
                  'etat':
                    (item)=>(
                      <div className={item.idErreur!=null ? "error-log" : "success-log"}></div>
                    ),
                  'application':
                    (item)=>(<td>{item.idApp.nomApp}</td>)
                }}
                // onRowClick={(vehicule) => handleClick(vehicule)}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default LogPage