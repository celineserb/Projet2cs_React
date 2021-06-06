/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Modal from 'react-modal'
import Button from '../button/button'

import profilePic from '../../assets/profile_pic.png'
import notificationIcon from '../../assets/notification_icon.png'
import './topbar.css'


Modal.setAppElement("#root")
export default function topBar(props){
    const [isProfileModalOpen,setProfileModal] = useState(false)

    function openCloseModal(){
        setProfileModal(!isProfileModalOpen)
    }

    return(
        <div className="topbar-wrapper">
            <div className="thex-topbar-container">
                <p className="thex-view-name">{props.viewTitle}</p>
                <NavLink to={props.route.path}>
                    <img src={notificationIcon} 
                            alt="notifications" 
                            className="thex-notification-icon"/>
                </NavLink>
                <p className="thex-profile-name">{props.profileName}</p>
                <img src={profilePic} alt="profile" className="thex-topbar-picture" onClick={()=>{openCloseModal()}}/>
                <Modal
                    isOpen={isProfileModalOpen}
                    contentLabel="Profile options"
                    onRequestClose={openCloseModal}
                    className="thex-Modal"
                    overlayClassName="thex-Overlay"
                    closeTimeoutMS={150}>
                    <Button text="Déconnecter" mode="dark_mode" onClick={()=>props.onDisconnect}/>
                </Modal>
            </div>
        </div>
    )
}