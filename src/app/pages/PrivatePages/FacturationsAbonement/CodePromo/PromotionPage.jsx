import React, { Component } from 'react'
import { CButton } from "@coreui/react";
import { Menu, Dropdown } from 'antd';
import { CustomTable } from '../utils'
import * as promoFunctions from '../../../../../modules/CodePromo/promotion.actions'
import { AddPromoCodePage } from './AddPromoCodePage'
class PromotionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            page: 1,
            total: 0,
            loading: true,
            addModel: false,
            creating: false,
            promo: {}
        }
        this.onPageChange = this.onPageChange.bind(this)
        this.handleModelAdd = this.handleModelAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchData({ page: 1 })
    }
    fetchData(query) {
        promoFunctions.fetchCodePromos(query)
            .then(res => {
                if (res && res.data && res.data.ok) {
                    this.setState({
                        list: res.data.data.list,
                        page: res.data.data.currentPage,
                        total: res.data.data.total,
                        loading: false
                    })
                }
            })
            .catch(err => {

            })
    }
    onPageChange(page) {
        if (this.state.page != page) {
            this.setState({ loading: true })
            this.fetchData({ page: page })
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            creating: true
        })
        let functionUser = this.state.promo.idPromoCode ? "updateCodePromo" : "addCodePromo"
        promoFunctions[functionUser](this.state.promo)
            .then(res => {
                if (res && res.data) {
                    this.fetchData({ page: this.state.page })
                }
            })
            .finally(e => {
                this.setState({
                    creating: false,
                    addModel: false,
                    promo: {}
                })
            })
    }
    handleDeletePromoCode(idCodePromo) {
        this.setState({
            actionLoading: true
        })
        promoFunctions.deleteCodePromo(idCodePromo)
            .then(res => {
                if (res && res.data) {
                    this.fetchData({ page: this.state.page })
                }
            })
            .finally(e => {
                this.setState({
                    actionLoading: false
                })
            })
    }
    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            promo: {
                ...this.state.promo,
                [name]: value
            }
        })
    }
    handleModelAdd() {
        this.setState({
            addModel: !this.state.addModel,
            promo: {}
        })
    }
    handleEditCode(codePromo) {
        this.setState({
            promo: codePromo,
            addModel: true
        })
    }
    render() {
        return (
            <div className="px-2">
                <div className="d-flex justify-content-between align-items-center px-4 pb-4">
                    <div className="position-relative">
                        <img className="position-absolute" style={{ top: 13, left: 13 }} src="/media/search.svg" />
                        <input type="text" placeholder="Recherche..." style={{ width: 600, paddingLeft: 40 }} className="custom-input py-2 pr-3 rounded" />
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="d-flex px-2 cursor-pointer">
                            <img className="sort-svg" alt="" />
                            <strong className="px-2">Ordonner</strong>
                        </span>
                        <span className="d-flex">
                            <img className="filter-svg" alt="" />
                            <strong className="px-2">Filtrer</strong>
                        </span>
                        <div className="ml-4">
                            <CButton className="btn-custom px-4 font-weight-bold" active tabIndex={-1} onClick={this.handleModelAdd}>
                                + Ajouter un code promo
                            </CButton>
                        </div>

                    </div>
                </div>
                <div>
                    <CustomTable
                        columns={[
                            { title: 'Numero du code promo', dataKey: "idPromoCode", render: idPromoCode => <strong>{`# ${idPromoCode}`}</strong> },
                            { title: 'Nombre de point', dataKey: "pricePoints", render: pricePoints => <strong>{pricePoints}</strong> },
                            { title: 'Réduction', dataKey: "reductionRate", render: reductionRate => <strong>{`${reductionRate * 100} %`}</strong> },
                            {
                                title: 'Action', dataKey: "idPromoCode", render: (idPromoCode, row) => <Dropdown overlay={<Menu>

                                    <Menu.Item key="0" onClick={() => this.handleEditCode(row)}>
                                        <div className="d-flex align-items-center pr-4 py-1">
                                            <i className="d-flex mr-2">
                                                <img src="/media/draw.svg" />
                                            </i>
                                            <span>Modifier</span>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item key="1" onClick={() => this.handleDeletePromoCode(idPromoCode)}>
                                        <div className="d-flex align-items-center pr-4 py-1">
                                            <i className="d-flex mr-2">
                                                <img src="/media/delete.svg" />
                                            </i>
                                            <span>Supprimer</span>
                                        </div>
                                    </Menu.Item>
                                </Menu>} trigger={['click']} >
                                    <i onClick={e => e.preventDefault()} className="d-flex" style={{ cursor: "pointer" }}>
                                        <img src="/media/more.svg" />
                                    </i>
                                </Dropdown>
                            }
                        ]}
                        data={this.state.list}
                        pagination={{ total: this.state.total, page: this.state.page, pageSize: 11, onChange: this.onPageChange }}
                        loading={this.state.loading}
                        loadingAction={this.state.actionLoading}
                    />
                    {this.state.addModel && <AddPromoCodePage inLoad={this.state.creating} onSubmit={this.handleSubmit} handleChange={this.handleChange} codePromo={this.state.promo} onCancel={this.handleModelAdd} />}
                </div>
            </div>
        )
    }
}
export { PromotionPage }