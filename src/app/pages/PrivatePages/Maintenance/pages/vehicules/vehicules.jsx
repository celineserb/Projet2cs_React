import React from 'react'
import VehiculeView from '../../components/vehiculeview/vehiculeListView'
import VehiculeGridView from '../../components/vehiculeview/vehiculeGridView'
import './vehicules.css'


export default function vehicules(props){
    return(
        <div className="vehicule-list-container">
            <div className="vehicule-header-promo">
                <VehiculeGridView />
                <VehiculeGridView />
                <VehiculeGridView />
                <VehiculeGridView />
                <VehiculeGridView />
                <VehiculeGridView />
                <VehiculeGridView />
                <VehiculeGridView />
            </div>
            <div className="vehicule-header-container">
                <p className="vehicule-header-title">Véhicule</p>
                <p className="vehicule-header-title">Client</p>
                <p className="vehicule-header-title">Disponible le</p>
                <p className="vehicule-header-title">Status</p>
            </div>
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
            <VehiculeView />
        </div>
    )
}