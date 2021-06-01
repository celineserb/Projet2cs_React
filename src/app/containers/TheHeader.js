import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CSubheader,
  CBreadcrumbRouter,
<<<<<<< HEAD
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
=======
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { withRouter } from "react-router-dom";
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e

// routes config
import routes from '../../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
<<<<<<< HEAD
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)
=======
} from "./index";

const TheHeader = (props) => {
  const dispatch = useDispatch();
  const [sidebarShow, user] = useSelector(({ slide, auth }) => [slide.sidebarShow, auth.user.userName]);
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader style={{
      border: "unset"
    }}>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
<<<<<<< HEAD
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/dashboard">Tableau de bord</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/users">Utilisateurs</CHeaderNavLink>
        </CHeaderNavItem>
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/> */}
        {/* <TheHeaderDropdownMssg/> */}
        <TheHeaderDropdown/>
      </CHeaderNav>

      {/* <CSubheader className="px-3 justify-content-between">
=======
        <CHeaderNavItem className="px-3">
          <strong><em>page name</em></strong>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownMssg/>
        <TheHeaderDropdownNotif/>
        <p>{user}</p>
        <TheHeaderDropdown />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between" style={{
        border: "unset"
      }}>
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
<<<<<<< HEAD
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink>
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink>
            <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink>
          </div>
      </CSubheader> */}
=======
      </CSubheader>
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
    </CHeader>
  )
}

export default TheHeader
