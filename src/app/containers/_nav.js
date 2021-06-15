import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Statistique",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "MAJ",
    },
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Statestiques",
    route: "/stats",
    icon: "cil-speedometer",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Locataire",
        to: "/stats/locataire",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Gestion locataires",
    to: "/gestionUtil/compteLocataire",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Locations",
    to: "/decideur/GrapheLocation",
    icon: "cil-graph",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Liste Véhicules",
    to: "/decideur/VehiculesLocation",
    icon: "cil-car",
  },
];

export default _nav;
