/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import EquipmentView from '../../../../../conponents/equipmentview/equipmentView'
import Button from '../../../../../conponents/button/button'
import './equipments.css'

Modal.setAppElement("#root")
export default function Equipments(props){
    const [equipments, setEquipments] = useState([])
    const [isEquipmentModalOpen, setEquipmentModalOpen] = useState(false)
    const [equipmentName,setEquipmentName] = useState('')
    const [equipmentCategory,setEquipmentCat] = useState('')
    const [equipmentPrice,setEquipmentPrice] = useState(0)

    useEffect(async ()=>{
        const result = await axios("https://service-equipment.herokuapp.com/equipment")
        setEquipments(result.data)
    },[])

    async function addEquipment(){
        if(equipmentName !== '' && equipmentCategory !== '' && equipmentPrice !== 0){
            const result = await axios
                .post("https://service-equipment.herokuapp.com/equipment",
                {"equipmentName": equipmentName,
                "unitPrice": equipmentPrice,
                "category": equipmentCategory}) 
            
            if(result.status === 200){
                setEquipmentModalOpen(false)
                setEquipmentName('')
                setEquipmentPrice(0)
                setEquipmentCat('')
            }
        }
    }

    return(
        <div className="equipments-wrapper">
            <div className="equipments-header-wrapper">
                <div className="equipment-header-action">
                    <Button text="Ajouter equipment" mode="light_mode" 
                        onClick={()=>{setEquipmentModalOpen(true)}}/>
                </div>
                <div className="equipment-header-text">
                    <p>Equipment</p>
                    <p>Categorie</p>
                    <p>Prix unitaire</p>
                </div>
            </div>
            <Modal 
                isOpen={isEquipmentModalOpen}
                contentLabel="Add equipment"
                closeTimeoutMS={150}
                style={{
                overlay: {
                    backgroundColor: "rgba(1,1,1,0.5)",
                    display: "grid",
                    gridAutoColumns: "auto",
                    justifyContent: "center",
                },
                content: {
                    width: "50%",
                    height: "65%",
                    margin: "auto",
                    borderRadius: "15px",
                    overflow: "hidden"
                },}}>
                <div className="add-equip-modal">
                    <p className="equip-modal-title">Ajouter un equipment</p><br />
                    <input  className="modal-form-input" 
                            type="text" name="equipment-title" 
                            id="equipment-title" 
                            placeholder="Nom de l'equipment" 
                            onChange={event => setEquipmentName(event.target.value)}/>
                    <br />
                    <input  className="modal-form-input" 
                            type="text" name="equipment-description" 
                            id="equipment-description" 
                            placeholder="Categorie" 
                            onChange={event => setEquipmentCat(event.target.value)}/>
                    <br />
                    <input  className="modal-form-input" 
                            type="text" name="equipment-price" 
                            id="equipment-price" 
                            placeholder="Prix unitaire" 
                            onChange={event => setEquipmentPrice(event.target.value)}/>
                    <br />
                    <br />
                    <div className="modal-buttons-holder">
                    <Button text="Annuler" mode="dark_mode" 
                            onClick={()=>{setEquipmentModalOpen(false)}}/>
                    <Button text="Confirmer" mode="light_mode" onClick={()=>{addEquipment()}}/>
                    </div>
                </div>  
            </Modal>
            <div>
                {equipments.map(item => (
                    <EquipmentView key={item.uuid} equipment={item} />
                ))}
            </div>
        </div>
    )
}