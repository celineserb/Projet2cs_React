import React from 'react'
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './style.scss'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const { Sider} = Layout;

export default function SideBar(props) {

    const location = useLocation();

    const section = props.items[0];
    const settings = props.items[1];
    const menu = props.items.slice(2);

    return ( 
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
                props.changeStyle();
            }}
            style={{
                backgroundColor: "#333",
                //overflow: 'auto',   //if you uncomment this, the sider zero width trigger won't show
                height: '100vh',
                position: "fixed",
                zIndex: 101
            }}
        >
      
                <div className="logo-wrapper">
                    <img className="logo-icon" src="media/logo-jaune.png" alt="logo" />
                    <label className="logo-text">AutoLibDZ</label>
                </div>
                <div className="section-title-wrapper">
                    <img className="section-title-icon" src={section.icon} alt={section.alt} />	
                    <label className="section-title-text truncated">{section.title}</label>
                </div>
                <div className="settings-wrapper">
                    <Link className="settings-link" to={settings.link}>
                        <img className="settings-icon" src={settings.icon} alt={settings.alt} />
                        <label className="settings-text truncated">{settings.title}</label>
                    </Link>
                </div>
                
                <div className="menu-wrapper" style={{overflow:"auto", maxHeight:"50vh"}}>
                {
                    menu.map((item, key) => {
                        var style = {};
                        if (location.pathname === item.link) {
                            style = { backgroundColor: "rgba(100, 100, 100, 0.63)", color: "#fff" }
                        }
                        return (
                            <div className="menu-item-wrapper" style={style}>
                                <Link className="menu-item-link" to={item.link}>
                                    <img className="menu-item-icon" src={item.icon} alt={item.alt} />
                                    <label className="menu-item-text truncated">{item.title}</label>
                                </Link> 
                            </div>
                        );
                    })
                }
                </div>
  
        </Sider>
    );
}
 