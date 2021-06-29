import React, { Component } from 'react'
import { message, Avatar } from 'antd';
import { CustomTable } from '../utils'
import { fetchFactures, downloadBill } from '../../../../../modules/Facturation/facturation.actions'
class FacturationPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            page: 1,
            total: 0,
            loading: true
        }
        this.onPageChange = this.onPageChange.bind(this)
        this.fetchData({ page: 1 })
    }
    fetchData(query) {
        fetchFactures(query)
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
    }
    onPageChange(page) {
        if (this.state.page != page) {
            this.setState({ loading: true })
            this.fetchData({ page: page })
        }
    }
    downloadBill(idBill) {
        message.loading({ content: 'Downloading...', key: "updatable" });
        downloadBill(idBill)
            .then(res => {
                if (res && res.data && res.data.ok) {
                    const link = document.createElement('a');
                    link.href = res.data.urlBill;
                    link.setAttribute(
                        'download',
                        `bill.pdf`,
                    );
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    message.success({ content: 'The bill downloaded successfully!', key: "updatable", duration: 2 });
                }
            })
            .catch(err => {

            })
    }
    render() {
        return (
            <div className="px-2">
                <div className="d-flex justify-content-between align-items-center px-4 pb-4">
                    <div className="position-relative w-100 mr-3">
                        <img className="position-absolute" style={{ top: 13, left: 13 }} src="/media/search.svg" />
                        <input type="text" placeholder="Recherche..." style={{ width: '100%',maxWidth:600, paddingLeft: 40 }} className="custom-input py-2 pr-3 rounded" />
                    </div>
                    <div className="d-flex">
                        <span className="d-flex px-2 cursor-pointer">
                            <img className="sort-svg" alt="" />
                            <strong className="px-2">Ordonner</strong>
                        </span>
                        <span className="d-flex">
                            <img className="filter-svg" alt="" />
                            <strong className="px-2">Filtrer</strong>
                        </span>
                    </div>
                </div>
                <div>
                    <CustomTable
                        columns={[
                            {
                                title: 'Utilisateur', dataKey: "idUser", render: (idUser, row) => {
                                    return <div className="d-flex py-2 align-items-center">
                                        <div className="mr-3">
                                            <Avatar src={row.profilePicture} className="image_size" />
                                        </div>
                                        <div className="d-flex flex-column ">
                                            <strong style={{ fontSize: "1.1em" }}>{`${row.firstName} ${row.lastName}`}</strong>
                                            <span className="color-trans text-small pt-1" style={{ fontSize: ".9em" }}>Facturée le :{(new Date(row.creationDate)).toLocaleDateString("fr-FR", { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </div>
                                }
                            },
                            { title: 'Numero de facture', dataKey: "nbBill", render: nbBill => <strong>{nbBill}</strong> },
                            { title: 'Payée via ', dataKey: "payedBy", render: payedBy => <strong>Credit card</strong> },
                            {
                                title: 'Etat', dataKey: "state", render: state => <span className="badge badge-pill py-2 px-4 badge-success" style={{ fontSize: "1em" }}>Payé</span>
                            },
                            {
                                title: 'Télécharger', dataKey: "idBill", render: idBill => <i onClick={() => this.downloadBill(idBill)} className="d-flex" style={{ cursor: "pointer" }}>
                                    <img src="/media/download.svg" />
                                </i>
                            }
                        ]}
                        data={this.state.list}
                        pagination={{ total: this.state.total, page: this.state.page, pageSize: 10, onChange: this.onPageChange }}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}
export { FacturationPage }