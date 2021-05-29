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
import logos from "../../assets/images/logo_yellow.png";
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
        backgroundColor: "#333"
      }}>
        <CRow className="c-sidebar-brand-full">
          <CIcon
            name="logo-negative"
            src={logos}
            height={35}
          />
          <p className="m-2">AutoLib Dz</p>
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
      </CSidebarNav>
      <CSidebarNavItem 
        to="/parameters"
        name="Parameters"
      >
      </CSidebarNavItem>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
