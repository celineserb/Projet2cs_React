import React , {useState} from 'react'
import { useDispatch} from 'react-redux'

import {Button, Dropdown, Menu, Avatar, List} from 'antd';
import 'antd/dist/antd.css';
import './style.scss'

import {ReactComponent as BellIcon } from '../../../../../assets/svg/bell.svg'
import {ReactComponent as UserIcon } from '../../../../../assets/svg/user.svg'





import {actions} from '../../../../../modules'
import { useLocation } from 'react-router';

const notifications = [
    {
        title : "first notiifications that came something about something you know",
        key : 0
    },
    {
        title : "second notiifications that came",
        key : 1
    },
    {
        title : "third notiifications that came",
        key : 2
    },
    {
        title : "fourth notiifications that came",
        key : 3
    }

]

export default function TopBar(props) {

    const [show, setShow] = useState(true)

    const menu = (
        <Menu>
            {
                notifications.map((item, key) =>{
                    return(
                        <Menu.Item key={key}
                        style={{
                            maxWidth:250,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            <Avatar 
                                  size={{
                                    xs:8,
                                    sm: 8,
                                    md: 12,
                                    lg: 12,
                                    xl: 12,
                                    xxl: 12,
                                }}
                                style={{
                                    backgroundColor:"red"
                                }}
                             />
                           {"   "+item.title} 
                           
                        </Menu.Item>
                    )
                }
               
            )}
           

          
         
        </Menu>
      );
     
    
    const disconnect =(
        <Menu>
            <Menu.Item key="0">
                    {props.user.lastName+" "+props.user.firstName}
            </Menu.Item>
            <Menu.Item key="0">
                   Alger, Zone 3
            </Menu.Item>
            <Menu.Item key="0">
                   Technical Admin
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item key="0">
                <Button
                shape="round"
                onClick={logout}
                style={{
                    backgroundColor:"#333333", 
                    color:'white', 
                    paddingRight: 15, 
                    paddingLeft:15, 
                    marginLeft: 15
                }}>
                    Logout
                </Button>
            </Menu.Item>
      </Menu>
    );
    
    const dispatch = useDispatch()

    function logout(){
        dispatch(actions.logout());
    }
    const location = useLocation()
    return ( 

        <div className="topbar-wrapper">
        <div className="back-wrapper">
            <a className="back-link" href="#">  
                <div className="back-text">
                { 
                        location.pathname.includes('/enlevements')? <label>Enlèvements</label>:
                            location.pathname.includes('/pannes')? <label>Pannes</label>: <label>Gestion des véhicules</label> 
                }
                    
                </div>
            </a>
        </div>
        <div className="profile-wrapper">
            <a className="profile-link" href="#">
                <div className="profile-icon"  >
                            <Dropdown 
                            overlay={disconnect}
                            placement="bottomCenter"
                            arrow='true'
                        >
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Avatar
                                size= {40}
                                icon={<UserIcon />}
                            />
                            </a>
                        </Dropdown>
                </div>
            </a>
                <div className="profile-text">
                    <div className="notifs-wrapper">
                        <div className="notifs-icon">
                        <Dropdown 
                            overlay={menu}
                            placement="bottomRight"
                            arrow='true'
                        >
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <BellIcon />
                            </a>
                        </Dropdown>     
                            <div className="notifs-alert-icon">
                                <img src="media/circle.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="vl"></div>
                    <a className="profile-link" href="#">
                        <label>{props.user.lastName+" "+props.user.firstName}</label>
                    </a>
                </div>
            
        </div>
    </div>
        
        );
}
 