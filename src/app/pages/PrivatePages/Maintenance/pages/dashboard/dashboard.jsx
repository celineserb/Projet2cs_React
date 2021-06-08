import React from 'react'
import {Switch
    , Route
    , useRouteMatch,
    Redirect} from 'react-router-dom'

import SideBar from '../../components/sidebar/sidebar'
import AgentView from '../agents/agents'
import TaskView from '../tasks/tasks'
import VehiculeView from '../vehicules/vehicules'
import NotificationView from '../notifications/notifications'
import TopBar from '../../components/topbar/topbar'

import TaskIcon from '../../assets/task.svg'
import AgentIcon from '../../assets/agent.svg'
import CarIcon from '../../assets/car.svg'
import './dashboard.css'

export default function MaintaintDashboard(props){
    let {parent, url} = useRouteMatch()
    const notificationRoute = {
        path: url + "notifications",
        name: "Notifications",
        view: () => getDashboardView("notification", notificationRoute,props.onClick)
    }
    const routes = [
        {
          path: url + "agents",
          name: "Agents",
          icon: AgentIcon,
          view: () => getDashboardView("agent",notificationRoute,props)
        },
        {
          path: url + "tasks",
          name: "Taches",
          icon: TaskIcon,
          view: () => getDashboardView("task",notificationRoute,props)
        },
        {
          path: url + "vehicules",
          name: "Véhicules",
          icon: CarIcon,
          view: () => getDashboardView("Vehicules",notificationRoute,props)
        },
        {
          path: url + "notifications",
          name: "Notifications",
          icon: 'icon',
          view: () => getDashboardView("notification", notificationRoute,props)
        }
      ];

    return(
        <div className="dashboard-container">
            <SideBar paths={routes.slice(0,routes.length-1)}/>
            <Redirect from={url} to="/agents" />
            <Switch >
                {routes.map((route, index)=>(
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.view />}
                    />
                ))}
            </Switch>
        </div>
    )
}

function getDashboardView(mode,route,props){
        switch(mode){
            case "agent": {
                return(
                    <div className="dashboard-view">
                        <TopBar viewTitle="Agents" 
                                profileName="aaron nerostarx"
                                route={route}/>
                        <div className="view">
                            <AgentView />
                        </div>
                    </div>)
            }
            case "task":{
                return(
                    <div className="dashboard-view">
                        <TopBar viewTitle="Taches" 
                                profileName="aaron nerostarx"
                                onDisconnect={()=>props.onClick}
                                route={route}/>
                        <div className="view">
                            <TaskView />
                        </div>
                    </div>)
            }
            case "notification": {
                return(
                    <div className="dashboard-view">
                        <TopBar viewTitle="Notifications" 
                                profileName="aaron nerostarx" 
                                onDisconnect={()=>props.onClick}
                                route={route}/>
                        <div className="view">
                            <NotificationView />
                        </div>
                    </div>)
            }
            default : {
                return(
                    <div className="dashboard-view">
                        <TopBar viewTitle="Véhicules" 
                                profileName="aaron nerostarx" 
                                onDisconnect={()=>props.onClick}
                                route={route}/>
                        <div className="view">
                            <VehiculeView />
                        </div>
                    </div>)
            }
        }
        
}