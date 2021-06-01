import React from 'react'
import './vehiculView.css'
import image from '../../assets/car_model.png'

export default function VehiculeListView(props){
    return(
        <div className="vehicule-view-container">
            <img src={image} alt="vehicule" className="vehicule-image"/>
            <div className="vehicule-divider-info">
                <p className="vehicule-title">Vehicule name</p>
                <p className="vehicule-subtitle">Type name</p>
            </div>
            <div className="vehicule-divider-client">
                <p className="vehicule-title">Client Name</p>
                <p className="vehicule-subtitle">20 mars 2021</p>
            </div>
            <div className="vehicule-divider-dispo">
                <p className="vehicule-title">29 may 2021</p>
                <p className="vehicule-subtitle">7:30 PM</p>
            </div>
            <div className="state-item">
                <p>EN COURS</p>
            </div>
        </div>
    )
}