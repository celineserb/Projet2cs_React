import React from 'react'
import { CButton } from "@coreui/react";
import { Modal, Button } from 'antd';
export const AddPromoCodePage = (props) => {
    return (
        <div>
            <Modal title={<strong style={{ fontSize: 19 }}>Code promotionnel</strong>} visible={true} onCancel={props.onCancel} footer={null} style={{ borderRadius: 10, overflow: "hidden" }} width='60%' centered={true}>
                {props.inLoad && <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: "#00000020", top: 0, left: 0 }}>
                    <div class="spinner-border text-warning" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>}
                <form onSubmit={props.onSubmit}>
                    <div className="mx-auto" style={{ width: "max-content" }}>
                        <div className="d-flex align-items-start justify-content-between mt-2">
                            <strong style={{ fontSize: 16 }}>Nombre de point:</strong>
                            <div className="ml-4">
                                <input type="number" name="pricePoints" value={props.codePromo.pricePoints} onChange={props.handleChange} placeholder="Nombre de point" style={{ width: 500 }} className="custom-input py-2 rounded px-3" />
                                <span className="d-block color-trans mt-1">Nombre de point nécessaire pour obtenir le code</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-start justify-content-between mt-4">
                            <strong style={{ fontSize: 16 }}>Réduction:</strong>
                            <div>
                                <input type="text" name="reductionRate" value={props.codePromo.reductionRate} onChange={props.handleChange} placeholder="Réduction" style={{ width: 500 }} className="custom-input py-2 rounded px-3" />
                                <span className="d-block color-trans mt-1">Le pourcentage de réduction sur le prix </span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center mt-4">
                        <CButton className="btn-custom px-4 font-weight-bold" type="submit" active tabIndex={-1} onClick={props.handleModelAdd}>
                            {props.codePromo.idPromoCode ? "Sauvegarder les changement" : "Créer le code promo"}
                        </CButton>
                    </div>
                </form>
            </Modal>
        </div>
    )
}