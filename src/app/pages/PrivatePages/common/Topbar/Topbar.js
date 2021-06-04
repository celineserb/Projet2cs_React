import React, { Component } from 'react'
import { useDispatch} from 'react-redux'

import {Button, Dropdown, Menu, Avatar} from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.scss'

import {ReactComponent as BellIcon } from '../../../../../assets/svg/bell.svg'
import {ReactComponent as UserIcon } from '../../../../../assets/svg/user.svg'


import {actions} from '../../../../../modules'



export default function TopBar(props) {

    const menu = (
        <Menu>
          <Menu.Item key="0">
              1st  item
          </Menu.Item>
          <Menu.Item key="1">
              2nd  item
          </Menu.Item>
          <Menu.Item key="3" >
            3rd item
          </Menu.Item>
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
        console.log(props.user);
    }

    return ( 

        <div className="topbar-wrapper">
        <div className="back-wrapper">
            <a className="back-link" href="#">  
                <div className="back-text">
                    <label>Gestion des véhicules</label>
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
                                size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 40,
                                xl: 40,
                                xxl: 40,
                                }}
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
 