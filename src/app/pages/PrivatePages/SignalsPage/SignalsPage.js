import React, { Component } from 'react'
import {Layout, Row, Button, Col, Checkbox} from 'antd'
import axios from 'axios';
import SignalComponent from './SignalComponent';



const data =[{"name":"123"},{"name":"456"}, {"name":"678"}, {"name":"935"}, {"name":"398"}, {"name":"999"}] ;

class SignalsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            treatedSignals:[], 
            untreatedSignals:[]
         }
         this.onSelect = this.onSelect.bind(this)
    }
    componentDidMount(){
        axios.get(`http://localhost:8111/theft_signals`)
        .then(res => {
          const treatedSignals = res.data.signlasTreated;
          const untreatedSignals = res.data.signalsNotTreated;
          this.setState({ 
              treatedSignals : treatedSignals,
              untreatedSignals : untreatedSignals,
              data : treatedSignals.concat(untreatedSignals)
            });
        })
    }
    onSelect(changedValues, ){
        console.log(changedValues);
        var treated =false;
        var untreated = false ;
        changedValues.forEach(element => {
            if (element=="T"){
                console.log("treated true");
                treated = true;
            }
            if (element=="U") {
                untreated = true;
            }
        });
        const treatedSignals = [...this.state.treatedSignals];
        const untreatedSignals  = [...this.state.untreatedSignals];
        if (treated && untreated) {
            this.setState({
                data : treatedSignals.concat(untreatedSignals)
            })
        }
        if (treated && !untreated) {
            console.log("treated");
            this.setState({
                data : treatedSignals
            })
        }
        if (!treated && untreated) {
            this.setState({
                data : untreatedSignals
            })
        }
        if (!treated && !untreated) {
            this.setState({
                data : treatedSignals.concat(untreatedSignals)
            })
        }
    }
    render() { 
        return ( 
            <Layout style={{ backgroundColor:'white'}}>
              <Row style={{}}>
                    <div className="signals-list-header">
                        <label className="signals-list-title">Enlèvements</label>
                        <button 
                            className="signals-list-sort-btn" 
                            onClick={() => {
                                const sort = document.getElementsByClassName("signals-list-sort")[0];
                                if (sort.classList.contains("hidden")) {
                                    sort.classList.remove("hidden");
                                } else {
                                    sort.classList.add("hidden");
                                }
                                console.log(this.state.data);
                             }}
                        >
                        <img className="sort-svg" alt="" /> Filtrer</button>
                        <div className="signals-list-sort hidden">
                        <Checkbox.Group style={{ width: '100%' }} onChange={this.onSelect}>
                                <Row>
                                    <Col >
                                        <Checkbox value="T">Traité</Checkbox>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <Checkbox value="U">Non Traité</Checkbox>
                                    </Col>
                                </Row>
                        </Checkbox.Group>
                        </div>
                        <div className="hl"></div>
                    </div>
                </Row>
                <div className="signals-list-body">
                    {                
                        this.state.data.map( (item, index) =>{
                            return (<SignalComponent index={index} item={item}></SignalComponent>)
                        })
                    }
                </div>
                
            </Layout>
         );
    }
}
 
export default SignalsPage;