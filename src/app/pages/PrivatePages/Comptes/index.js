import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'

import { getUsers } from '../../../../modules/Users/users.crud'
import { Button, Modal } from 'antd'
import axios from 'axios'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}



const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const [pages, setPages] = useState(1)
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [users, setUsers] = useState([])

  const [showModal, setshowModal] = useState(false)
  const [currentItem, setcurrentItem] = useState({})

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/comptes?page=${newPage}`)
  }
  const banirUser = (item) => {
      setshowModal(true)
      setcurrentItem(item)
      console.log(currentItem);

  }
  const banir = () => {
    let idUser = currentItem.idUser
    axios.put(`http://localhost:8564/banTenantAccount?idUser=${idUser}`)
    .then((response) => 
          console.log(response)
    )
    console.log("Confirmed ban");
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  useEffect(() => {
    getUsers().then(({ data }) => {
      setPages(Math.ceil(data.length / 10))
      console.log(data)
      setUsers(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  return (
    <>
    
    <CRow>
      <CCol >
        <CCard>
          <CCardHeader>
            Users
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={users}
            fields={[
              { key: 'lastName', _classes: 'font-weight-bold' },
              'firstName', 'address', 'phoneNumber','userType'
            ]}
            hover
            striped
            itemsPerPage={10}
            activePage={page}
            clickableRows
            //onRowClick={(item) => history.push(`/comptes/${item.idUser}`)}
            onRowClick={ banirUser}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                   
                  </td>
                  
                )
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={pages}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <Modal            
            title={"Banir l'utilisateur"}
            centered
            visible={showModal}
            onOk={() => {setshowModal(false)}}
            onCancel={() => setshowModal(false)}
            footer={[
            <Button
              key="back" 
              onClick={() => {
                setshowModal(false)
                banir()
                }}
              shape='round'
              size ='middle'
              style={{
      
                backgroundColor: '#F9C31B', 
                borderColor: 'white', 
                color: 'black',  
                paddingRight:25,
                paddingLeft:25,    
              }}>
              
              Confirmer
            </Button>,  
        ]}>
          <p>Cliquez sur confirmer pour banir cet utilisateur</p>
        </Modal>
    
    </>
  )
}

export default Users
