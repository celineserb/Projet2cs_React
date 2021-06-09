import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Statistique',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'MAJ',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Gestion locataires',
    to: '/gestionUtil/compteLocataire',
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Locations',
    to: '/decideur/GrapheLocation',
    icon: 'cil-graph'
  },
]

export default _nav
