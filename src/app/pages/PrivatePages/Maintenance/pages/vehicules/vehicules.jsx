/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import VehiculeView from '../../components/vehiculeview/vehiculeListView'
import VehiculeGridView from '../../components/vehiculeview/vehiculeGridView'
import './vehicules.css'
import axios from 'axios'


export default function vehicules(props){
    const [vehicules, setVehicules] = useState([])

    useEffect(async ()=>{
        const result = await axios("http://localhost:8000/vehicle")
        setVehicules(result.data.listVehicles)
        return result
    },[])

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
                <p className="vehicule-header-title">Status</p>
            </div>
            {vehicules?.map(vehicule=>(
                <VehiculeView key={vehicule.idVehicle} vehicule={vehicule}/>
            ))}
        </div>
    )
}