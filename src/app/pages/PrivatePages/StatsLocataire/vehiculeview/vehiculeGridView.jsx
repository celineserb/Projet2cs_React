import React from 'react'
import image from '../assets/car_model.png'
import './vehiculView.css'

export default function vehiculeGridView({vehicule}){
    return(
        <div className="vehicule-grid-container">
            <img src={image} alt="vehicule" className="vehicule-image-grid"/>
            <p className="vehicule-title">{vehicule.vehiclemodel}</p>
            <p className="vehicule-subtitle">{vehicule.vehiclebrand}</p>
        </div>
    )
}