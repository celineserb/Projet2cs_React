import React, { Component } from 'react'
import {Layout } from 'antd';
import 'antd/dist/antd.css';
import './style.scss'

const { Sider} = Layout;
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
          <div className="sidebar-wrapper">
                <div className="logo-wrapper">
                    <div className="logo-icon">
                        <img src="media/logo-jaune.png" />
                    </div>
                    <div className="logo-text">
                        <label>AutoLibDZ</label>
                    </div>
                </div>
                <div className="section-title-wrapper">
                    <div className="section-title-icon">
                        <img src="media/device-cctv.svg" alt="" />	
                    </div>
                    <div className="section-title-text">
                        <label>Surveillance</label>
                    </div>
                </div>
                <div className="menu-wrapper">
                    <div className="menu-item-wrapper">
                        <a className="menu-item-link" href="#vehicules">
                            <div className="menu-item-icon">
                                <img src="media/car.svg" alt="" />	
                            </div>
                            <div className="menu-item-text">
                                <label>Véhicules</label>		
                            </div>
                        </a>
                    </div>
                    <div className="menu-item-wrapper">
                        <a className="menu-item-link" href="enlevements">
                            <div className="menu-item-icon">
                                <img src="media/alien.svg" alt="" />	
                            </div>
                            <div className="menu-item-text">
                                <label>Enlèvements</label>		
                            </div>
                        </a>
                    </div>
                    <div className="menu-item-wrapper">
                        <a className="menu-item-link" href="pannes">
                            <div className="menu-item-icon">
                                <img src="media/alert-triangle.svg" alt="" />	
                            </div>
                            <div className="menu-item-text">
                                <label>Pannes</label>		
                            </div>
                        </a>
                    </div>
                </div>
                <div className="settings-wrapper">
                    <a className="settings-link" href="#parametres">
                        <div className="settings-icon">
                            <img src="media/settings.svg" />
                        </div>
                        <div className="settings-text">
                            <label>Paramètres</label>
                        </div>
                    </a>
                </div>
            </div>
          </Sider>
         );
    }
}
 
export default SideBar;