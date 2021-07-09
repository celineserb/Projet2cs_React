import React from 'react'
import Button from '../button/button'
import './loginform.css'
import logo from '../../assets/main_logo.svg'


export default function form(props){
    return(
        <div className="contact-form">
            <img src={logo} alt="main logo" className="main-logo" />
            <p className="contact-title">Se connecter a votre compte</p>
            <br /><br />
            <input type="email" name="email_input" 
                id="email-input" placeholder="Email" className="form-input"/>
            <br /><br />
            <input type="password" name="password_input" 
                id="name-input" placeholder="Mot de pass" className="form-input"/>
                <br /><br /><br />
            <Button text="Se connecter" mode="light_mode" onClick={props.onClick}/>
            <br /><br />
        </div>
    )
}