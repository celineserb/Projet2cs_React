import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/sidebar_logo.png'
import './sidebar.css'

export default function sidebar(props){
    let routes = props.paths
    return(
     <div className="sidebar-container">
        <img src={Logo} alt="logo" className="side-logo"/>
        <ul>
            {routes.map((route, index)=>(
                <li key={index}>
                    <NavLink to={route.path} className="link" activeClassName="active-link">
                        <img src={route.icon} alt="icon" className="option-icon" />
                        {route.name}
                    </NavLink>
                </li>
            ))}
        </ul>
     </div>  
    )
}