import React, { Component } from 'react'
import {Layout, Row, Button} from 'antd'
import axios from 'axios';
import SignalComponent from './SignalComponent';



const data =[{"name":"123"},{"name":"456"}, {"name":"678"}, {"name":"935"}, {"name":"398"}, {"name":"999"}] ;

class SignalsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            treatedSignals:[], 
            untreatedSignals:[]
         }
    }
    componentDidMount(){
        axios.get(`http://localhost:8111/theft_signals`)
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
                                console.log("Treated signals");
                                console.log(this.state.treatedSignals);
                                console.log("untreated signals");
                                console.log(this.state.untreatedSignals);
                             }}
                        >
                        <img className="sort-svg" alt="" /> Ordonner</button>
                        <div className="signals-list-sort hidden">
                            <ul>
                                <li><input type="checkbox" id="sort-latest" /><label for="sort-latest">Plus récents</label></li>
                                <li><input type="checkbox" id="sort-unseen" /><label for="sort-unseen">Non vues</label></li>
                            </ul>
                        </div>
                        <div className="hl"></div>
                    </div>
                </Row>
                <div className="signals-list-body">
                    {
                        this.state.untreatedSignals.map( (item, index) =>{
                            return (<SignalComponent index={index} item={item}></SignalComponent>)
                        })
                    }
                    
                </div>
                
            </Layout>
         );
    }
}
 
export default SignalsPage;