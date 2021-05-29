import { Row, Layout } from 'antd';
import React from 'react';
import "./style/style.scss";
import PanneComponent from './PanneComponent';
import axios from 'axios';
import { Component } from 'react';

class PannesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            treatedSignals:[], 
            untreatedSignals:[],
            data:[]
        }
        this.onFilter = this.onFilter.bind(this)
        this.onSort = this.onSort.bind(this)
    }
    componentDidMount(){
        axios.get(`http://localhost:8111/panne_signals`)
        .then(res => {
          const treatedSignals = res.data.signlasTreated;
          const untreatedSignals = res.data.signalsNotTreated;
          const data = treatedSignals.concat(untreatedSignals);
          data.sort((a, b) => {
            return b.idSignal - a.idSignal
        })
          this.setState({ 
            treatedSignals : treatedSignals,
            untreatedSignals : untreatedSignals,
            data : data
          });
        });
        document.getElementById("filter-all").checked = true;
        document.getElementById("sort-newest").checked = true;
    }

    onFilter() {
        var data = [];
        if (document.getElementById("filter-unseen").checked) {
            data = this.state.untreatedSignals;
        } else if (document.getElementById("filter-seen").checked) {
            data = this.state.treatedSignals;
        } else {
            data = this.state.untreatedSignals.concat(this.state.treatedSignals);
        }
        if (document.getElementById("sort-oldest").checked) {
            data.sort((a, b) => {
                return a.idSignal - b.idSignal;
            });
        } else {
            data.sort((a, b) => {
                return b.idSignal - a.idSignal;
            });
        }
        this.setState({
            data: data
        })
        
    }

    onSort() {
        var data = this.state.data;
        if (document.getElementById("sort-oldest").checked) {
            data.sort((a, b) => {
                return a.idSignal - b.idSignal;
            });
        } else {
            data.sort((a, b) => {
                return b.idSignal - a.idSignal;
            });
        }
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <Layout>
                    <Row >
                        <div className="pannes-list-header">
                            <label className="pannes-list-title">Pannes</label>
                            <button className="pannes-list-filter-btn" onClick={() => {
                                const sort = document.getElementsByClassName("pannes-list-filter")[0];
                                if (sort.classList.contains("hidden")) {
                                    sort.classList.remove("hidden");
                                } else {
                                    sort.classList.add("hidden");
                                }
                            }}><img className="filter-svg" alt="" /> Filtrer</button>
                            <div className="pannes-list-filter hidden">
                                <ul onChange={this.onFilter}>
                                    <li><input name="list-filter" type="radio" id="filter-all" /><label for="filter-all">Toutes</label></li>
                                    <li><input name="list-filter" type="radio" id="filter-unseen" /><label for="filter-unseen">Non vues</label></li>
                                    <li><input name="list-filter" type="radio" id="filter-seen" /><label for="filter-seen">Vues</label></li>
                                </ul>
                            </div>
                            <button className="pannes-list-sort-btn" onClick={() => {
                                const sort = document.getElementsByClassName("pannes-list-sort")[0];
                                if (sort.classList.contains("hidden")) {
                                    sort.classList.remove("hidden");
                                } else {
                                    sort.classList.add("hidden");
                                }
                            }}><img className="sort-svg" alt="" /> Ordonner</button>
                            <div className="pannes-list-sort hidden">
                                <ul onChange={this.onSort}>
                                    <li><input name="list-sort" type="radio" id="sort-newest" /><label for="sort-newest">Récentes d'abord</label></li>
                                    <li><input name="list-sort" type="radio" id="sort-oldest" /><label for="sort-oldest">Anciennes d'abord</label></li>
                                </ul>
                            </div>
                            <div className="hl"></div>
                        </div>
                    </Row>

                    <div className="pannes-list-body">
                        {
                            this.state.data.map( (item, index) =>{
                                return (<PanneComponent index={index} item={item}></PanneComponent>)
                            })
                        }
                    </div>
            </Layout>
        )
    }
}

export default PannesPage


/*
var data = [
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    {
        message:"Help me please",
        sourceType:"Auto",
        sent_at:"2021-05-18T00:50:18.322Z",
        treated:true,
        vehiclebrand:"FIAT 500 POP HATCHBACK 2019",
        vehiclemodel:"FIAT ",
        firstName:"Rihani",
        lastName:"Safi"
    },
    
];
*/