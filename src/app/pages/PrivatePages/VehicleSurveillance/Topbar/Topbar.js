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

          <div className="topbar-wrapper">
            <div className="back-wrapper">
                <a className="back-link" href="#">
                    <div className="back-icon">
                        <img src="media/back.svg" alt="" />
                    </div>
                    <div className="back-text">
                        <label>Gestion des véhicules</label>
                    </div>
                </a>
            </div>
            <div className="profile-wrapper">
                <a className="profile-link" href="#">
                    <div className="profile-icon">
                        <img src="media/user.svg" alt="" />
                    </div>
                </a>
                    <div className="profile-text">
                        <div className="notifs-wrapper">
                            <div className="notifs-icon">
                                <img src="media/bell.svg" alt="" />
                                <div className="notifs-alert-icon">
                                    <img src="media/circle.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="vl"></div>
                        <a className="profile-link" href="#">
                            <label>Youcef Ouarab</label>
                        </a>
                    </div>
                
            </div>
        </div>
         
         );
    }
}
 
export default TopBar;