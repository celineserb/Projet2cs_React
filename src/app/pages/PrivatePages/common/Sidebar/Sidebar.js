import React, { Component } from 'react'
import {Layout } from 'antd';
import 'antd/dist/antd.css';
import './style.scss'
import { Link } from 'react-router-dom';

const { Sider} = Layout;
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            section: props.items[0],
            settings: props.items[1],
            menu: props.items.slice(2)
        }
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
                style={{
                    backgroundColor: "#333",
                    overflow: 'auto',
                    height: '100vh',
                    //position: "fixed"  //uncomment this when you fix the other stuff
                }}
            >
            <div className="sidebar-wrapper">
                <div className="logo-wrapper">
                    <img className="logo-icon" src="media/logo-jaune.png" alt="logo" />
                    <label className="logo-text">AutoLibDZ</label>
                </div>
                <div className="section-title-wrapper">
                    <img className="section-title-icon" src={this.state.section.icon} alt={this.state.section.alt} />	
                    <label className="section-title-text truncated">{this.state.section.title}</label>
                </div>
                <div className="settings-wrapper">
                    <Link className="settings-link" to={this.state.settings.link}>
                        <img className="settings-icon" src={this.state.settings.icon} alt={this.state.settings.alt} />
                        <label className="settings-text truncated">{this.state.settings.title}</label>
                    </Link>
                </div>
                <div className="menu-wrapper">
                {
                    this.state.menu.map((item) => {
                        return (
                            <div className="menu-item-wrapper">
                                <Link className="menu-item-link" to={item.link}>
                                    <img className="menu-item-icon" src={item.icon} alt={item.alt} />
                                    <label className="menu-item-text truncated">{item.title}</label>
                                </Link>
                            </div>
                        );   
                    })
                }
                </div>
            </div>
                
                    
        
          </Sider>
         );
    }
}
 
export default SideBar;