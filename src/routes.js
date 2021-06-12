import React from "react";
import PannesPage from "./app/pages/PrivatePages/PannesPage/PannesPage";
import SignalsPage from "./app/pages/PrivatePages/SignalsPage/SignalsPage";
import TrackingPage from "./app/pages/PrivatePages/VehicleSurveillance/TrackingPage";

const Toaster = React.lazy(() => import('./app/conponents/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./app/conponents/base/tables/Tables'));

const UsersTable =React.lazy(()=> import('./app/conponents/gestionUtil/compteLocataire'));

const Breadcrumbs = React.lazy(() => import('./app/conponents/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./app/conponents/base/cards/Cards'));
const Carousels = React.lazy(() => import('./app/conponents/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./app/conponents/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./app/conponents/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./app/conponents/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./app/conponents/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./app/conponents/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./app/conponents/base/navs/Navs'));
const Paginations = React.lazy(() => import('./app/conponents/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./app/conponents/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./app/conponents/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./app/conponents/base/switches/Switches'));

const Tabs = React.lazy(() => import('./app/conponents/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./app/conponents/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./app/conponents/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./app/conponents/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./app/conponents/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./app/conponents/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./app/conponents/charts/Charts'));
const Dashboard = React.lazy(() => import('./app/conponents/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./app/conponents/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./app/conponents/icons/flags/Flags'));
const Brands = React.lazy(() => import('./app/conponents/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./app/conponents/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./app/conponents/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./app/conponents/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./app/conponents/theme/colors/Colors'));
const Typography = React.lazy(() => import('./app/conponents/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./app/conponents/widgets/Widgets'));
const Users = React.lazy(() => import('./app/conponents/users/Users'));
const User = React.lazy(() => import('./app/conponents/users/User'));
const Login = React.lazy(() => import('./app/pages/AuthPages/login/Login'))
const Page404 = React.lazy(() => import('./app/pages/AuthPages/page404/Page404'))
const Page500 = React.lazy(() => import('./app/pages/AuthPages/page500/Page500'))
const GrapheLocation = React.lazy(() => import('./app/pages/PrivatePages/GraphDeLocation'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
   //----------------- Gestion utilisateur routes:
     //---------- new routes : gestion utilisteurs ::
  { path: '/comptes', name: 'GestionUtil', component: UsersTable, exact: true },
  // { path: '/gestionUtil', name: 'gestionUtil', component: Cards, exact: true },
  { path: '/compteLocataire', name: 'TableLocataire', component: UsersTable },

  { path: "/login", exact: true, name: "Login Page", component: Login },
  { path: "/p404", name: "Page not found", component: Page404 },
  { path: "/p500", name: "Page not found", component: Page500 },

  { path: "/GrapheLocation", name: "Graphe de location", component: GrapheLocation},

  { path: "/tracking/:vehicleId/:rentalId", name: "Gestion des Vehicules", component: TrackingPage},
  { path: "/enlevements", name: "Gestion des Vehicules", component: SignalsPage},
  { path: "/pannes", name: "Gestion des Vehicules", component: PannesPage}
];

export default routes;
