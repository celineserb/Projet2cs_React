import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CRow,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import logos from "../../../assets/images/logo-jaune.png";
// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(({ slide }) => slide.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
      style={{
        background: "#333",
        color: "#A4A6B3",
      }}
    >
      <CSidebarBrand className="d-md-down-none" to="/"  style={{
        paddingTop: 25,
        backgroundColor: "#333"
      }}>
        <CRow className="c-sidebar-brand-full">
          <CIcon
            name="logo-negative"
            src={logos}
            height={45}
          />
          <p className="m-2" style={{
            fontSize: 22
          }}>AutoLib Dz</p>
        </CRow>
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          src={logos}
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav className="mt-4">

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
        <CSidebarNavDropdown icon="cil-list-rich" name="Facturation service">
          <CSidebarNavItem icon="cil-list" name="Facturation" to="/facturation/facture"/>
          <CSidebarNavItem icon="cil-notes" name="Gestion des abonnements" to="/facturation/abonne"/>
          <CSidebarNavItem icon="cil-code" name="Codes Promos" to="/facturation/promotion"/>
        </CSidebarNavDropdown>
        <CSidebarNavDivider style={{
          flex: 1
        }} />
        <CSidebarNavItem 
          to="/parameters"
          name="Parameters"
          icon="cil-settings"
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
