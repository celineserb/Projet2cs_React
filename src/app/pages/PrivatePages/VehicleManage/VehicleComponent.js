/*
    this file shows the information of one vehicle inside a list
*/

import React from 'react';
import Truncate from './helpers/Truncate'
import './style/VehicleComponent.css'

const VehicleComponent = ({vehicle}) => {
    console.log(vehicle);
    return(
        <li className='vehicle-elem'>
            <div>
                <img id="vehicle-img"  src={vehicle.image}/>
                <div className='custom-elem vehicle-type'>
                    <p >{vehicle.vehiclebrand? Truncate(vehicle.vehiclebrand, 10) : '-'}</p>
                    <p>{vehicle.vehiclebrand? Truncate(vehicle.vehicletype, 10): '-'}</p>
                </div>
            </div>
            <div className='custom-elem'>
                    <p>{vehicle.firstname ? vehicle.firstname : '-'}</p>
                    <p>{vehicle.rentaldate ? vehicle.rentaldate.slice(0,10) : '-'}</p>
            </div>
            <div className='custom-elem'>
                    <p>{vehicle.availibledate ? vehicle.availibledate.slice(0,10) : '-'}</p>
                    <p>{vehicle.availibledate ? vehicle.availibledate.slice(11,19) : '-'}</p>
            </div>
            {
                vehicle.status ? <p className='status available'>Prete</p> :
                <p className='status unavailable'>En cours</p>
            }
            
        </li>
    )

}

export default VehicleComponent;
