import React, { Component } from 'react'
import {Layout, Row} from 'antd'
import axios from 'axios';
import SignalComponent from './SignalComponent';



const data =[{"name":"123"},{"name":"456"}, {"name":"678"}, {"name":"935"}, {"name":"398"}, {"name":"999"}] ;

class SignalsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signals:[]
         }
    }
    componentDidMount(){
        axios.get(`someurlhna`)
        .then(res => {
          const signals= res.data;
          this.setState({ signals });
        })
    }
    render() { 
        return ( 
            <Layout style={{ backgroundColor:'white'}}>
              <Row style={{}}>
                    <div className="pannes-list-header">
                        <label className="pannes-list-title">Enlèvements</label>
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
                <div className="signals-list-body">
                    {
                        data.map( (item, index) =>{
                            return (<SignalComponent index={index} item={item}></SignalComponent>)
                        })
                    }
                </div>
            </Layout>
         );
    }
}
 
export default SignalsPage;