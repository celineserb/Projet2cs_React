import React, { useState, useEffect } from 'react'
import { CButton } from "@coreui/react";
import { CustomTable } from '../utils'
import { Modal } from 'antd';
import { fetchSubscriptionType, addSubscriptionType } from '../../../../../modules/Abonnement/abonnement.actions'
export const TypeAbonnements = (props) => {
    const [listType, setListType] = useState(null)
    const [loading, setLoading] = useState(true)
    const [creating, setCreating] = useState(false)
    const [showAdd, setAdd] = useState(false)
    const [typeAbonne, setTypeAbonne] = useState({ bonusPointsRate: 0.35 })
    useEffect(() => {
        if (!listType) {
            fetchData({})
        }
    })
    const fetchData = (query) => {
        fetchSubscriptionType(query)
            .then(res => {
                if (res && res.data) {
                    setListType(res.data)
                }
            })
            .catch(err => {

            })
            .finally(e => {
                setLoading(false)
            })
    }
    const handleAddType = () => {
        setAdd(!showAdd)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setCreating(true)
        addSubscriptionType(typeAbonne)
            .then(res => {
                if (res && res.data) {
                    setAdd(false)
                    fetchData({})
                }
            })
            .catch(err => {

            })
            .finally(e => {
                setCreating(false)
            })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setTypeAbonne({
            ...typeAbonne,
            [name]: value
        })
    }
    return (
        <div>
            <Modal title={<strong style={{ fontSize: 19 }}>Type abonnements</strong>} visible={!showAdd} onCancel={props.onCancel} footer={null} style={{ borderRadius: 10, overflow: "hidden" }} width='50%' centered={true}>
                <CustomTable
                    columns={[
                        { title: "Type d'abonnement", dataKey: "subTypeName", render: subTypeName => <strong>{subTypeName}</strong> },
                        { title: 'Tarification', dataKey: "reductionRate", render: reductionRate => <strong>{`${reductionRate * 100} %`}</strong> },
                        { title: 'La durée', dataKey: "subTypeDuration", render: subTypeDuration => <strong>{`${subTypeDuration / 30} mois`}</strong> }
                    ]}
                    data={listType}
                    loading={loading}
                />
                <div className="d-flex">
                    <CButton className="btn-custom px-4 font-weight-bold" active tabIndex={-1} onClick={handleAddType}>
                        + Type abonnement
                    </CButton>
                </div>
            </Modal>
            <Modal title={<strong style={{ fontSize: 19 }}>Ajouter un type d'abonnement</strong>} visible={showAdd} onCancel={handleAddType} footer={null} style={{ borderRadius: 10, overflow: "hidden" }} maskStyle={{ bodyStyle: "black" }} width='47%' centered={true}>
                {creating && <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: "#00000020", top: 0, left: 0 }}>
                    <div class="spinner-border text-warning" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>}
                <form onSubmit={handleSubmit}>
                    <div className="w-100 mx-auto d-table" style={{ maxWidth: 700 }}>
                        <div style={{ display: "table-row-group" }}>
                            <div className="align-items-start justify-content-between" style={{ display: "table-row" }}>
                                <strong className='text-nowrap pr-3' style={{ fontSize: 16, display: "table-cell" }}>Type d'abonnement:</strong>
                                <div className="w-100 py-2" style={{ display: "table-cell" }}>
                                    <input type="text" name="subTypeName" value={typeAbonne.subTypeName} onChange={handleChange} placeholder="Type d'abonnement" className="custom-input py-2 rounded px-3 w-100" />
                                    <span className="d-block color-trans mt-1">Le nom de type d'abonnement</span>
                                </div>
                            </div>
                            <div className="align-items-start justify-content-between" style={{ display: "table-row" }}>
                                <strong className='text-nowrap pr-3' style={{ fontSize: 16, display: "table-cell" }}>Tarification:</strong>
                                <div className="w-100 py-2" style={{ display: "table-cell" }}>
                                    <input type="number" name="reductionRate" value={typeAbonne.reductionRate} onChange={handleChange} placeholder="Tarification" className="custom-input py-2 rounded px-3 w-100" />
                                    <span className="d-block color-trans mt-1">Les reduction a avoir apres l'utilisation de ce type</span>
                                </div>
                            </div>
                            <div className="align-items-start justify-content-between" style={{ display: "table-row" }}>
                                <strong className='text-nowrap pr-3' style={{ fontSize: 16, display: "table-cell" }}>La durée:</strong>
                                <div className="w-100 py-2" style={{ display: "table-cell" }}>
                                    <input type="number" name="subTypeDuration" value={typeAbonne.subTypeDuration} onChange={handleChange} placeholder="La durée en jour" className="custom-input py-2 rounded px-3 w-100" />
                                    <span className="d-block color-trans mt-1">La durée de type d'abonnement exprimer en jour</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <CButton className="btn-custom px-4 font-weight-bold" type="submit" active tabIndex={-1}>
                            Ajouter le type
                        </CButton>
                    </div>
                </form>
            </Modal>
        </div>
    )
}