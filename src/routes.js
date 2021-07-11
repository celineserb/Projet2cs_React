import React from "react";

const UsersTable =React.lazy(()=> import('./app/conponents/gestionUtil/compteLocataire'));
const AdminDecideurTable =React.lazy(()=> import('./app/conponents/gestionUtil/gestionCompte'));
const Dashboard = React.lazy(() => import('./app/conponents/dashboard/Dashboard'));
const Users = React.lazy(() => import('./app/conponents/users/Users'));
const User = React.lazy(() => import('./app/conponents/users/User'));
const Login = React.lazy(() => import('./app/pages/AuthPages/login/Login'))
const Page404 = React.lazy(() => import('./app/pages/AuthPages/page404/Page404'))
const Page500 = React.lazy(() => import('./app/pages/AuthPages/page500/Page500'))
const GrapheLocation = React.lazy(() => import('./app/pages/PrivatePages/GraphDeLocation'))
const AgentStat = React.lazy(() => import('./app/pages/PrivatePages/GraphDAgent'))
const StatsTables = React.lazy(() => import('./app/pages/PrivatePages/StatsLocataire'))
const TrackingPage = React.lazy(() => import('./app/pages/PrivatePages/VehicleSurveillance/TrackingPage'))
const SignalsPage = React.lazy(() => import('./app/pages/PrivatePages/SignalsPage/SignalsPage'))
const PannesPage = React.lazy(() => import('./app/pages/PrivatePages/PannesPage/PannesPage'))
const LogPage = React.lazy(() => import('./app/pages/PrivatePages/LogPage'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
   //----------------- Gestion utilisateur routes:
     //---------- new routes : gestion utilisteurs ::
  { path: '/comptes', name: 'GestionUtil', component: UsersTable, exact: true },
  // { path: '/gestionUtil', name: 'gestionUtil', component: Cards, exact: true },
  { path: '/compteLocataire', name: 'TableLocataire', component: UsersTable },
  { path: '/gestionCompte', name: 'Gestion Compte', component: AdminDecideurTable },
  { path: "/login", exact: true, name: "Login Page", component: Login },
  { path: "/p404", name: "Page not found", component: Page404 },
  { path: "/p500", name: "Page not found", component: Page500 },

  { path: "/GrapheLocation", name: "Graphe de location", component: GrapheLocation},
  { path: "/GrapheAgent", name: "Statistiques Agent", component: AgentStat},
  {
    path: "/VehiculesLocation",
    name: "Liste véhicules",
    component: StatsTables,
  },

  { path: "/tracking/:vehicleId/:rentalId", name: "Gestion des Vehicules", component: TrackingPage},
  { path: "/enlevements", name: "Gestion des Vehicules", component: SignalsPage},
  { path: "/pannes", name: "Gestion des Vehicules", component: PannesPage},
  { path: "/Log", name: "Logs page", component: LogPage}

];

export default routes;
