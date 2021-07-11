import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import logos from "../../assets/images/logo-jaune.png";

import { withRouter } from "react-router-dom";

// routes config
import routes from "../../routes";

import {
  TheHeaderDropdown,
} from "./index";

const TheHeader = (props) => {
  const dispatch = useDispatch();
  const [sidebarShow, user] = useSelector(({ slide, auth }) => [slide.sidebarShow, auth.user.userName]);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
    
  };
  let activeRoute=routes.find(route=>route.path===window.location.pathname)
  return (
    <CHeader>
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
        <CIcon name="logo" height="48" alt="Logo" src={logos} />
      </CHeaderBrand>
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <strong style={{fontSize:20}}>{activeRoute &&activeRoute.name}</strong>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <CHeaderNav className="d-md-down-none mr-auto">
          <CHeaderNavItem className="px-2">
            <em><b>{user}</b></em>
          </CHeaderNavItem>
        </CHeaderNav>
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

export default withRouter(TheHeader);
