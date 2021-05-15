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
          <div class="sidebar-wrapper">
                <div class="logo-wrapper">
                    <div class="logo-icon">
                        <img src="media/logo-jaune.png" />
                    </div>
                    <div class="logo-text">
                        <lable>AutoLibDZ</lable>
                    </div>
                </div>
                <div class="section-title-wrapper">
                    <div class="section-title-icon">
                        <img src="media/device-cctv.svg" alt="" />	
                    </div>
                    <div class="section-title-text">
                        <label>Surveillance</label>
                    </div>
                </div>
                <div class="menu-wrapper">
                    <div class="menu-item-wrapper">
                        <a class="menu-item-link" href="#vehicules">
                            <div class="menu-item-icon">
                                <img src="media/car.svg" alt="" />	
                            </div>
                            <div class="menu-item-text">
                                <label>Véhicules</label>		
                            </div>
                        </a>
                    </div>
                    <div class="menu-item-wrapper">
                        <a class="menu-item-link" href="#enlevements">
                            <div class="menu-item-icon">
                                <img src="media/alien.svg" alt="" />	
                            </div>
                            <div class="menu-item-text">
                                <label>Enlèvements</label>		
                            </div>
                        </a>
                    </div>
                    <div class="menu-item-wrapper">
                        <a class="menu-item-link" href="#pannes">
                            <div class="menu-item-icon">
                                <img src="media/alert-triangle.svg" alt="" />	
                            </div>
                            <div class="menu-item-text">
                                <label>Pannes</label>		
                            </div>
                        </a>
                    </div>
                </div>
                <div class="settings-wrapper">
                    <a class="settings-link" href="#parametres">
                        <div class="settings-icon">
                            <img src="media/settings.svg" />
                        </div>
                        <div class="settings-text">
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