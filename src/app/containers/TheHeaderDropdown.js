<<<<<<< HEAD
import React from 'react'
=======
import React from "react";
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
<<<<<<< HEAD
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
=======
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../modules";

const TheHeaderDropdown = (props) => {

  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(actions.logout())
  }

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={"avatars/6.jpg"}
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
<<<<<<< HEAD
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
=======
        <CDropdownItem header tag="div" color="light" className="text-center">
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
<<<<<<< HEAD
          <CBadge color="info" className="mfs-auto">42</CBadge>
=======
          <CBadge color="info" className="mfs-auto">
            42
          </CBadge>
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
<<<<<<< HEAD
          <CBadge color="success" className="mfs-auto">42</CBadge>
=======
          <CBadge color="success" className="mfs-auto">
            42
          </CBadge>
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
<<<<<<< HEAD
          <CBadge color="danger" className="mfs-auto">42</CBadge>
=======
          <CBadge color="danger" className="mfs-auto">
            42
          </CBadge>
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
<<<<<<< HEAD
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
=======
          <CBadge color="warning" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
          Profile
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
<<<<<<< HEAD
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
=======
          <CBadge color="secondary" className="mfs-auto">
            42
          </CBadge>
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
<<<<<<< HEAD
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
=======
          <CBadge color="primary" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={handleLogout}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default withRouter(TheHeaderDropdown);
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
