/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EquipmentView from '../../components/equipmentview/equipmentView'
import Button from '../../components/button/button'
import './equipments.css'


export default function Equipments(props){
    const [equipments, setEquipments] = useState([])

    useEffect(async ()=>{
        const result = await axios("https://service-equipment.herokuapp.com/equipment")
        setEquipments(result?.data)
    },[])

    return(
        <div className="equipments-wrapper">
            <div className="equipments-header-wrapper">
                <div className="equipment-header-action">
                    <Button text="Ajouter equipment" mode="light_mode" />
                </div>
                <div className="equipment-header-text">
                    <p>Equipment</p>
                    <p>Categorie</p>
                    <p>Prix unitaire</p>
                </div>
            </div>
            <div>
                {equipments.map(item => (
                    <EquipmentView key={item.uuid} equipment={item} />
                ))}
            </div>
        </div>
    )
}