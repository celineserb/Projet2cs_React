import React, { Component } from 'react'
import { Avatar, Menu, Dropdown } from 'antd';
import { CButton } from "@coreui/react";
import { CustomTable } from '../utils'
import {TypeAbonnements} from './TypeAbonnements'
import { fetchSubscriptions, activateSubscription, deleteSubscription } from '../../../../../modules/Abonnement/abonnement.actions'
class AbonnementPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            total: 0,
            page: 1,
            loading: true,
            actionLoading: false,
            showList: false,
        }
        this.statesSub = {
            pending: "warning",
            expired: "danger",
            active: "success"
        }
        this.textsSub = {
            pending: "En attente",
            expired: "Expiré",
            active: "En cours"
        }
        this.onPageChange = this.onPageChange.bind(this)
        this.showModelList=this.showModelList.bind(this)
        this.fetchData({ page: 1 })
    }
    fetchData(query) {
        fetchSubscriptions(query)
            .then(res => {
                console.log(res.data);
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
        if (this.state.page !== page) {
            this.setState({ loading: true })
            this.fetchData({ page: page })
        }
    }
    handleDeleteSub(idSub) {
        this.setState({
            actionLoading: true
        })
        deleteSubscription(idSub)
            .then(res => {
                if (res && res.data) {
                    this.fetchData({ page: this.state.page })
                }
            })
            .catch(err => {

            })
            .finally(e => {
                this.setState({
                    actionLoading: false
                })
            })
    }
    handleActivateSub(idSub) {
        this.setState({
            actionLoading: true
        })
        activateSubscription(idSub)
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
    showModelList(){
        this.setState({
            showList:!this.state.showList
        })
    }
    render() {
        return (
            <div className="px-2">
                <div className="d-flex justify-content-between align-items-center px-4 pb-4">
                    <div className="position-relative w-100 mr-3">
                        <img className="position-absolute" style={{ top: 13, left: 13 }} src="/media/search.svg" alt="search" />
                        <input type="text" placeholder="Recherche..." style={{ width: '100%',maxWidth:600, paddingLeft: 40 }} className="custom-input py-2 pr-3 rounded" />
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
                            <CButton className="btn-custom px-4 font-weight-bold" active tabIndex={-1} onClick={this.showModelList}>
                                Type d'abonnements
                            </CButton>
                        </div>
                    </div>
                </div>
                <div>
                    <CustomTable
                        columns={[
                            {
                                title: 'Utilisateur', dataKey: "user", render: (user, row) => {
                                    return <div className="d-flex py-2 align-items-center">
                                        <div className="mr-3">
                                            <Avatar src={row.user.profilePicture} className="image_size" />
                                        </div>
                                        <div className="d-flex flex-column ">
                                            <strong style={{ fontSize: "1.1em" }}>{`${row.user.firstName || 'Inconnue'} ${row.user.lastName || 'Inconnue'}`}</strong>
                                            <span className="color-trans text-small pt-1" style={{ fontSize: ".9em" }}>Créer le :{(new Date(row.creationDate)).toLocaleDateString("fr-FR", { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </div>
                                }
                            },
                            { title: 'Type d’abonnement', dataKey: "subTypeO", render: subTypeO => <strong>{subTypeO.subTypeName}</strong> },
                            { title: 'Date d’expiration', dataKey: "expirationDate", render: expirationDate => <strong>{expirationDate ? (new Date(expirationDate)).toLocaleDateString("fr-FR", { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-'}</strong> },
                            {
                                title: 'Etat', dataKey: "subState", render: subState => <span className={`badge badge-pill text-white py-2 px-4 badge-${this.statesSub[subState]}`} style={{ fontSize: "1em" }}>{this.textsSub[subState]}</span>
                            },
                            {
                                title: 'Action', dataKey: "idSub", render: (idSub, row) => <Dropdown overlay={<Menu>
                                    {row.subState === "pending" &&
                                        <Menu.Item key="0" onClick={() => this.handleActivateSub(idSub)}>
                                            <div className="d-flex align-items-center pr-4 py-1">
                                                <i className="d-flex mr-2">
                                                    <img src="/media/Activate.svg" alt="activate" />
                                                </i>
                                                <span>Activer</span>
                                            </div>
                                        </Menu.Item>}
                                    <Menu.Item key="1" onClick={() => this.handleDeleteSub(idSub)}>
                                        <div className="d-flex align-items-center pr-4 py-1">
                                            <i className="d-flex mr-2">
                                                <img src="/media/delete.svg" alt="delete" />
                                            </i>
                                            <span>Supprimer</span>
                                        </div>
                                    </Menu.Item>
                                </Menu>} trigger={['click']} >
                                    <i onClick={e => e.preventDefault()} className="d-flex" style={{ cursor: "pointer" }}>
                                        <img src="/media/more.svg" alt="" />
                                    </i>
                                </Dropdown>
                            }
                        ]}
                        data={this.state.list}
                        pagination={{ total: this.state.total, page: this.state.page, pageSize: 10, onChange: this.onPageChange }}
                        loading={this.state.loading}
                        loadingAction={this.state.actionLoading}
                    />
                </div>
                {this.state.showList && <TypeAbonnements onCancel={this.showModelList} />}
            </div>
        )
    }
}
export { AbonnementPage }