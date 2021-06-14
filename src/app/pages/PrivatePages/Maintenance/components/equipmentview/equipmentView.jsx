import React from 'react'
import './equipmentView.css'

export default function EquipmentView(props){
    const Equipment = props.equipment
    return(
        <div className="equipment-view-container">
            <div className="equipment-about">
                <div className="task-bubble"></div>
                <p className="equipment-title">{Equipment.equipmentName}</p>
            </div>
            <p className="equipment-text">{Equipment.category}</p>
            <p className="equipment-title">{Equipment.unitPrice+ " DZA"}</p>
        </div>
    )
}