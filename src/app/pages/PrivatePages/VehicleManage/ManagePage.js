/*
    list of vehicles
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VehicleComponent from './VehicleComponent';
import './style/VehicleList.css';

import { Row} from 'antd';
import 'antd/dist/antd.css';


const ManagePage = () =>{
    const [nbPage, setNbPage] = useState(0);
    const [nbOfPages, setNbOfPages] = useState(0);
    const [nbVehiculesPerPage, setNbVehiculesPerPage] = useState(5);
    const [vehicles, setVehicles] = useState([]);
    const [nbVehicles, setNbVehicles] = useState(0);

    // fetch data on mount component
    useEffect(() => {
        // just fetch the data inside the vehicles state initially with page = 0
        axios.get(`http://localhost:8000/vehicle?page=${nbPage}&limit=${nbVehiculesPerPage}`)
        .then((response) => response.data)
        .then(({nbVehicles, nbPages, listVehicles}) => {
            setVehicles(listVehicles);
            setNbOfPages(nbPages);
            setNbVehicles(nbVehicles);
         })
     
    }, [nbPage]);

    return(
        <Row justify='start'>
            <div className='list-container' >
                    <div>
                        <p>Ordonner</p>
                        <p>Filtrer</p>
                    </div>
                    <ul className="vehicle-list">
                        <li className='headers'>
                            <p>Vehicule</p>
                            <p>Client</p>
                            <p>Disponible le</p>
                            <p>Status</p>
                        </li>
                        {
                            vehicles.map((vehicle, key) =>
                                <VehicleComponent vehicle={vehicle} key={key} />
                            )
                        }
                    </ul>
                    <div className='pagination'>
                        <p>Lignes par page: {nbVehiculesPerPage}</p>
            
                        <p>{1 + nbVehiculesPerPage * nbPage}-{nbVehiculesPerPage * (nbPage + 1)} of {nbVehicles}</p>
                        <div className='arrows'>
                        <button id="#previous-page" onClick={() => setNbPage(nbPage - 1)} ><i className='arrow left'></i></button>
                        <button onClick={() => setNbPage(nbPage + 1)} ><i className='arrow right'></i></button>
                    </div>
                </div>
            </div>
        </Row>
                    
        
    );
}
 export default ManagePage;
