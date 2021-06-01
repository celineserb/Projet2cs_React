import React from 'react'
import image from '../../assets/car_model.png'
import './vehiculView.css'

export default function vehiculeGridView(props){
    return(
        <div className="vehicule-grid-container">
            <img src={image} alt="vehicule" className="vehicule-image-grid"/>
            <p className="vehicule-title">Vehicule name</p>
            <p className="vehicule-subtitle">Type name</p>
        </div>
    )
}