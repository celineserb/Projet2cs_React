import React, { Component } from 'react'
//import {Layout } from 'antd';
import 'antd/dist/antd.css';
import './style.scss'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

          <div class="topbar-wrapper">
            <div class="back-wrapper">
                <a class="back-link" href="#">
                    <div class="back-icon">
                        <img src="media/back.svg" alt="" />
                    </div>
                    <div class="back-text">
                        <label>Gestion des véhicules</label>
                    </div>
                </a>
            </div>
            <div class="profile-wrapper">
                <a class="profile-link" href="#">
                    <div class="profile-icon">
                        <img src="media/user.svg" alt="" />
                    </div>
                </a>
                    <div class="profile-text">
                        <div class="notifs-wrapper">
                            <div class="notifs-icon">
                                <img src="media/bell.svg" alt="" />
                                <div class="notifs-alert-icon">
                                    <img src="media/circle.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="vl"></div>
                        <a class="profile-link" href="#">
                            <label>Youcef Ouarab</label>
                        </a>
                    </div>
                
            </div>
        </div>
         
         );
    }
}
 
export default TopBar;