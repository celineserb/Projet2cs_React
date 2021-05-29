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
            untreatedSignals:[]
         }
    }
    componentDidMount(){
        axios.get(`http://localhost:8111/panne_signals`)
        .then(res => {
          const treatedSignals = res.data.signlasTreated;
          const untreatedSignals = res.data.signalsNotTreated;
          this.setState({ 
              treatedSignals : treatedSignals,
              untreatedSignals : untreatedSignals
            });
        })
    }

    render() {
        return (
            <Layout>
                    <Row >
                        <div className="pannes-list-header">
                            <label className="pannes-list-title">Pannes</label>
                            <button className="pannes-list-sort-btn" onClick={() => {
                                const sort = document.getElementsByClassName("pannes-list-sort")[0];
                                if (sort.classList.contains("hidden")) {
                                    sort.classList.remove("hidden");
                                } else {
                                    sort.classList.add("hidden");
                                }
                            }}><img className="sort-svg" alt="" /> Ordonner</button>
                            <div className="pannes-list-sort hidden">
                                <ul>
                                    <li><input type="checkbox" id="sort-latest" /><label for="sort-latest">Plus récents</label></li>
                                    <li><input type="checkbox" id="sort-unseen" /><label for="sort-unseen">Non vues</label></li>
                                </ul>
                            </div>
                            <div className="hl"></div>
                        </div>
                    </Row>

                    <div className="pannes-list-body">
                        {
                            this.state.untreatedSignals.map( (item, index) =>{
                                return (<PanneComponent index={index} item={item}></PanneComponent>)
                            })
                        }
                        {
                            this.state.treatedSignals.map( (item, index) =>{
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