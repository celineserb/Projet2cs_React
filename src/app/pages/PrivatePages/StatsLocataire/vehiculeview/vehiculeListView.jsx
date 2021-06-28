import React from 'react'
import './vehiculView.css'
import image from '../assets/car_model.png'

export default function VehiculeListView({vehicule}){
    return(
        <div className="vehicule-view-container">
            <img src={image} alt="vehicule" className="vehicule-image"/>
            <div className="vehicule-divider-info">
                <p className="vehicule-title">{vehicule.vehiclemodel}</p>
                <p className="vehicule-subtitle">{vehicule.Vehiclebrand}</p>
            </div>
            <div className="vehicule-divider-client">
                <p className="vehicule-title">{vehicule.vehicleType}</p>
                <p className="vehicule-subtitle">{vehicule.idBorne}</p>
            </div>
            <div className="vehicule-divider-dispo">
                <p className="vehicule-title">29 may 2021</p>
                <p className="vehicule-subtitle">7:30 PM</p>
            </div>
            <div className="state-item">
                <p>{vehicule.availability}</p>
            </div>
        </div>
    )
}