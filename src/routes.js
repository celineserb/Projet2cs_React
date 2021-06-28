import React from "react";
import PannesPage from "./app/pages/PrivatePages/PannesPage/PannesPage";
import SignalsPage from "./app/pages/PrivatePages/SignalsPage/SignalsPage";
import TrackingPage from "./app/pages/PrivatePages/VehicleSurveillance/TrackingPage";

const Tables = React.lazy(() => import("./app/conponents/base/tables/Tables"));

const UsersTable = React.lazy(() =>
  import("./app/conponents/gestionUtil/compteLocataire")
);

const Dashboard = React.lazy(() =>
  import("./app/conponents/dashboard/Dashboard")
);
// const Users = React.lazy(() => import("./app/conponents/users/Users"));
// const User = React.lazy(() => import("./app/conponents/users/User"));
const Login = React.lazy(() => import("./app/pages/AuthPages/login/Login"));
const Page404 = React.lazy(() =>
  import("./app/pages/AuthPages/page404/Page404")
);
const Page500 = React.lazy(() =>
  import("./app/pages/AuthPages/page500/Page500")
);
const GrapheLocation = React.lazy(() =>
  import("./app/pages/PrivatePages/GraphDeLocation")
);
const StatsTables = React.lazy(() =>
  import("./app/pages/PrivatePages/StatsLocataire")
);
const AgentStat = React.lazy(() => import('./app/pages/PrivatePages/GraphDAgent'))
const Users = React.lazy(() => import("./app/pages/PrivatePages/Comptes"))
const LogPage = React.lazy(() => import('./app/pages/PrivatePages/LogPage'))


const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/users", exact: true, name: "Users", component: Users },
  // { path: "/users/:id", exact: true, name: "User Details", component: User },
  //----------------- Gestion utilisateur routes:
  //---------- new routes : gestion utilisteurs ::
  // { path: "/comptes", name: "GestionUtil", component: UsersTable, exact: true },
  // { path: '/gestionUtil', name: 'gestionUtil', component: Cards, exact: true },
  { path: "/compteLocataire", name: "TableLocataire", component: UsersTable },

  { path: "/login", exact: true, name: "Login Page", component: Login },
  { path: "/p404", name: "Page not found", component: Page404 },
  { path: "/p500", name: "Page not found", component: Page500 },

  {
    path: "/GrapheLocation",
    name: "Graphe de location",
    component: GrapheLocation,
  },
  {
    path: "/VehiculesLocation",
    name: "Liste véhicules",
    component: StatsTables,
  },
  { path: "/GrapheAgent", name: "Statistiques Agent", component: AgentStat},
  { path: "/comptes", name: "Comptes users", component: Users },

  { path: "/tracking/:vehicleId/:rentalId", name: "Gestion des Vehicules", component: TrackingPage},
  { path: "/enlevements", name: "Gestion des Vehicules", component: SignalsPage},
  { path: "/pannes", name: "Gestion des Vehicules", component: PannesPage},
  { path: "/Log", name: "Log", component: LogPage}
];

export default routes;
