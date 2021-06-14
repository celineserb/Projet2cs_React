import React from 'react'
import './vehiculView.css'
import image from '../../../assets/icons/car_model.png'

export default function VehiculeListView(props){
    const vehicule = props.vehicule

    return(
        <div className="vehicule-view-container">
            <img src={image} alt="vehicule" className="vehicule-image"/>
            <div className="vehicule-divider-info">
                <p className="vehicule-title">{vehicule.vehiclebrand}</p>
                <p className="vehicule-subtitle">{vehicule.vehicletype}</p>
            </div>
            <div className={vehicule.availibility + " state-item"}>
                <p>{vehicule.availibility}</p>
            </div>
        </div>
    )
}